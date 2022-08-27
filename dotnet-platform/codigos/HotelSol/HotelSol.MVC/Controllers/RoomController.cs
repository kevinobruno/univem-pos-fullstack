using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HotelSol.Application.Interfaces;
using HotelSol.Application.ViewModels;

namespace HotelSol.MVC.Controllers
{
    public class RoomController : Controller
    {

        private IRoomService _service;

        public RoomController(IRoomService service)
        {
            _service = service;
        }

        [Authorize]
        public IActionResult Index()
        {
            RoomViewModel viewModel = _service.GetRooms();
            return View(viewModel);
        }

    }
}
