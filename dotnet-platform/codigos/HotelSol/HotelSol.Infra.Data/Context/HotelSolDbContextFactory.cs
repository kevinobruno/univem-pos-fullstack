using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace HotelSol.Infra.Data.Context
{
    public class HotelSolDbContextFactory : IDesignTimeDbContextFactory<HotelSolDbContext>
    {
        public HotelSolDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<HotelSolDbContext>();
            optionsBuilder.UseSqlite("Data Source=app.db");

            return new HotelSolDbContext(optionsBuilder.Options);
        }
    }
}
