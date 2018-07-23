using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SignalRChat.BusinessLayer.ViewModels.Account;
using SignalRChat.DataLayer.Models;
using SignalRChat.Helpers;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SignalRChat.Api.Controllers
{
    public class AccountController : Controller
    {
        #region Fields
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IOptions<AppSettings> _settings;
        #endregion

        #region Ctor
        public AccountController(SignInManager<User> signInManager, UserManager<User> userManager, IOptions<AppSettings> settings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _settings = settings;
        }
        #endregion

        #region Actions
        [HttpPost]
        public async Task<IActionResult> GetToken([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, false, false);
            if (result.Succeeded)
            {
                var user = _userManager.Users.SingleOrDefault(u => u.Email == model.Username);
                return Ok(new
                {
                    token = GenerateJwtToken(model.Username, user)
                });
            }

            return Unauthorized();
        }
        #endregion

        #region Private
        private string GenerateJwtToken(string email, IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_settings.Value.JwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_settings.Value.JwtExpireDays));

            var token = new JwtSecurityToken(
                _settings.Value.JwtIssuer,
                _settings.Value.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: creds
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        #endregion
    }
}
