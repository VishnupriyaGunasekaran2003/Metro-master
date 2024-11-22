using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName = "Bob", UserName = "bob", Email = "bob@test.com"},
                    new AppUser{DisplayName = "Tom", UserName = "tom", Email = "tom@test.com"},
                    new AppUser{DisplayName = "Jane", UserName = "jane", Email = "jane@test.com"},
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            if (context.Tickets.Any()) return;
            
            var tickets = new List<Ticket>
            {
                new Ticket
                {
                    StartStation = "Egmore Metro",
                    Destination = "Koyambedu",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Thirumangalam",
                    Destination = "Arumbakkam",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Egmore Metro",
                    Destination = "Arumbakkam",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Arumbakkam",
                    Destination = "Koyambedu",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Vadapalani",
                    Destination = "Koyambedu",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Thirumangalam",
                    Destination = "Vadapalani",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Egmore Metro",
                    Destination = "Thirumangalam",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Thirumangalam",
                    Destination = "Koyambedu",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Arumbakkam",
                    Destination = "Koyambedu",
                    NumberOfPassengers = 1,
                },
                new Ticket
                {
                    StartStation = "Egmore Metro",
                    Destination = "Koyambedu",
                    NumberOfPassengers = 1,
                }
            };

            await context.Tickets.AddRangeAsync(tickets);
            await context.SaveChangesAsync();
        }
    }
}