using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StoreApp.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [DataType(DataType.Currency)]
        public double Price { get; set; }

        public virtual CategoryModel Category { get; set; }
    }
}
