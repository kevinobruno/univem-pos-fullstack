using HotelSol.Application.Interfaces;
using HotelSol.Application.ViewModels;
using HotelSol.Domain.Interfaces;

namespace HotelSol.Application.Services
{
    public class BookingService : IBookingService
    {

        public IBookingRepository _repository;

        public BookingService(IBookingRepository repository)
        {
            _repository = repository;
        }

        public BookingViewModel GetBookings()
        {
            return new BookingViewModel() { Bookings = _repository.GetBookings() };
        }
    }
}
