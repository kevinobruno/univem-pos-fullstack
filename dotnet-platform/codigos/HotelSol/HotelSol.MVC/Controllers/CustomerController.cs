using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HotelSol.Application.Interfaces;
using HotelSol.Application.ViewModels;

namespace HotelSol.MVC.Controllers
{
    public class CustomerController : Controller
    {

        private ICustomerService _service;

        public CustomerController(ICustomerService service)
        {
            _service = service;
        }

        [Authorize]
        public IActionResult Index()
        {
            CustomerViewModel viewModel = _service.GetCustomers();
            return View(viewModel);
        }

    }
}
