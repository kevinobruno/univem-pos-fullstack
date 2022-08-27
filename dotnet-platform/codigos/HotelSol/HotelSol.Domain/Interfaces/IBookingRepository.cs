using HotelSol.Domain.Models;

namespace HotelSol.Domain.Interfaces
{
    public interface IBookingRepository
    {
        IEnumerable<Booking> GetBookings();
    }
}
