using Domain;
using FluentValidation;
namespace Application.Tickets
{
    public class TicketValidator : AbstractValidator<Ticket>
    {
        public TicketValidator()
        {
            RuleFor(x => x.StartStation).NotEmpty();
            RuleFor(x => x.Destination).NotEmpty();
            RuleFor(x => x.NumberOfPassengers).NotEmpty();
            RuleFor(x => x.DateTime).NotEmpty();
        }
    }
}