using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HotelApp.Models;

public class HotelAppContext : DbContext
{
    public HotelAppContext (DbContextOptions<HotelAppContext> options)
        : base(options)
    {
    }
    public DbSet<HotelApp.Models.Booking> Booking { get; set; }
    public DbSet<HotelApp.Models.Customer> Customer { get; set; }
    public DbSet<HotelApp.Models.Room> Room { get; set; }
    public DbSet<HotelApp.Models.RoomType> RoomType { get; set; }

}
