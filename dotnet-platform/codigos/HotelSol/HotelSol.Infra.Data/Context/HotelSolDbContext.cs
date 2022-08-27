using Microsoft.EntityFrameworkCore;

namespace HotelSol.Infra.Data.Context
{
    public class HotelSolDbContext : DbContext
    {
        public HotelSolDbContext(DbContextOptions<HotelSolDbContext> options) : base(options)
        {
        }

        public DbSet<HotelSol.Domain.Models.Booking> Booking { get; set; }
        public DbSet<HotelSol.Domain.Models.Customer> Customer { get; set; }
        public DbSet<HotelSol.Domain.Models.Room> Room { get; set; }
    }
}
