using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace HotelApp.Models
{
    public class Booking
    {
        public int Id { get; set; }

        [Display(Name="Cliente")]
        public int CustomerId { get; set; }

        [Display(Name="Quarto")]
        public int RoomId { get; set; }

        [Display(Name="Data CheckIn")]
        [DataType(DataType.Date)]
        public DateTime CheckInDate { get; set; }

        [Display(Name="Data CheckOut")]
        [DataType(DataType.Date)]
        public DateTime CheckOutDate { get; set; }

        [Display(Name="Preço")]
        [DataType(DataType.Currency)]
        public double Price { get; set; }

        [Display(Name="Observação")]
        public string Note { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Room Room { get; set; }
    }
}
