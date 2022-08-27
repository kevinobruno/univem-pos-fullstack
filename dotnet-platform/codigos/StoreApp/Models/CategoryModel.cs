namespace StoreApp.Models
{
    public class CategoryModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual List<ProductModel> Products { get; set; }
    }
}
