using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TesteApi.Data
{
    public class TesteApiContext : DbContext
    {
        public TesteApiContext(DbContextOptions<TesteApiContext> options) : base(options)
        {
        }

        public DbSet<TesteApi.Models.Customer> Customer { get; set; }
    }
}
