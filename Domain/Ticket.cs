using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Ticket
    {
        public Guid Id { get; set; } = Guid.NewGuid(); // Auto-generated unique identifier

        [Required]
        [MaxLength(100)]
        public string StartStation { get; set; } // Start station name

        [Required]
        public string Destination { get; set; } // Destination station name

        [Required]
        [Range(1, 10)] // Limit passengers between 1 and 10 for validation
        public int NumberOfPassengers { get; set; } 

        [Required]
        public DateTime DateTime { get; set; } = DateTime.Now;
    }
}