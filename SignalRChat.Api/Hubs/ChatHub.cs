using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Api.Hubs
{
    [Authorize]
    public class ChatHub: Hub<IChatHub>
    {
        
    }
}
