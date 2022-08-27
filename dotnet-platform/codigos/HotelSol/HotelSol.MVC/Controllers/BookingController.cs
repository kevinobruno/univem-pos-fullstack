using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HotelSol.Application.Interfaces;
using HotelSol.Application.ViewModels;

namespace HotelSol.MVC.Controllers
{
    public class BookingController : Controller
    {

        private IBookingService _service;

        public BookingController(IBookingService service)
        {
            _service = service;
        }

        [Authorize]
        public IActionResult Index()
        {
            BookingViewModel viewModel = _service.GetBookings();
            return View(viewModel);
        }

    }
}
