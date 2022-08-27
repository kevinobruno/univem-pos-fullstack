using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace HotelApp.Models
{
    public class Room
    {
        public int Id { get; set; }
        public int Number { get; set; }

        [Display(Name="Tipo de Quarto")]
        public int RoomTypeId { get; set; }

        [Display(Name="Localização")]
        public string Position { get; set; }

        public string? Status { get; set; }

        public virtual RoomType RoomType { get; set; }

    }
}
