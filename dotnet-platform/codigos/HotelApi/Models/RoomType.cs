using System.ComponentModel.DataAnnotations;

namespace HotelApi.Models
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
    }
}
