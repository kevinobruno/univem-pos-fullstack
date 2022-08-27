using HotelSol.Domain.Interfaces;
using HotelSol.Domain.Models;
using HotelSol.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace HotelSol.Infra.Data.Repositories
{
    public class BookingRepository : IBookingRepository
    {
        public HotelSolDbContext _context;

        public BookingRepository(HotelSolDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Booking> GetBookings()
        {
            return _context.Booking.Include(b => b.Room).Include(b => b.Customer);
        }
    }
}
