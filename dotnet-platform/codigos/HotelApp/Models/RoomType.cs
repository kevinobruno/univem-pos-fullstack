using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace HotelApp.Models
{
    public class RoomType
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [Display(Name="Descrição")]
        public string Description { get; set; }

        [Display(Name="Preço")] 
        [DataType(DataType.Currency)]       
        public double Price { get; set; }

        public virtual List<Room> Rooms { get; set; }
    }
}
