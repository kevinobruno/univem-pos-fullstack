using HotelSol.Application.ViewModels;

namespace HotelSol.Application.Interfaces
{
    public interface IBookingService
    {
        BookingViewModel GetBookings();
    }
}
