using System.ComponentModel.DataAnnotations;

namespace HotelApi.Models
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
