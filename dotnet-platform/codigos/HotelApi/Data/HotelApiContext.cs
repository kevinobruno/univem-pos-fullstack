using Microsoft.EntityFrameworkCore;

public class HotelApiContext : DbContext
{
    public HotelApiContext (DbContextOptions<HotelApiContext> options) : base(options)
    {
    }

    public DbSet<HotelApi.Models.Room> Room { get; set; }

    public DbSet<HotelApi.Models.RoomType> RoomType { get; set; }
}
