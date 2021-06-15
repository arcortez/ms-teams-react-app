using Microsoft.AspNetCore.Identity;
using MS_Teams_API.Application.DTOs.Account;
using System;
using System.Collections.Generic;
using System.Text;

namespace MS_Teams_API.Infrastructure.Identity.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<RefreshToken> RefreshTokens { get; set; }
        public bool OwnsToken(string token)
        {
            return this.RefreshTokens?.Find(x => x.Token == token) != null;
        }
    }
}
