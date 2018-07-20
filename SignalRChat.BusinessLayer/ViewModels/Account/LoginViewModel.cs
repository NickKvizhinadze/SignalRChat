using System.ComponentModel.DataAnnotations;

namespace SignalRChat.BusinessLayer.ViewModels.Account
{
    public class LoginViewModel
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
