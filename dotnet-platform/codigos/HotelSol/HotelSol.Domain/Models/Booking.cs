using System.ComponentModel.DataAnnotations;

namespace HotelSol.Domain.Models
{
    public class Booking
    {
        public int Id { get; set; }

        public int CustomerId { get; set; }

        public int RoomId { get; set; }

        [DataType(DataType.Date)]
        public DateTime CheckInDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime CheckOutDate { get; set; }

        [DataType(DataType.Currency)]
        public double Price { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Room Room { get; set; }
    }
}
