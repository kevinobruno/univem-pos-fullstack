using HotelSol.Application.Interfaces;
using HotelSol.Application.ViewModels;
using HotelSol.Domain.Interfaces;

namespace HotelSol.Application.Services
{
    public class CustomerService : ICustomerService
    {

        public ICustomerRepository _repository;

        public CustomerService(ICustomerRepository repository)
        {
            _repository = repository;
        }

        public CustomerViewModel GetCustomers()
        {
            return new CustomerViewModel() { Customers = _repository.GetCustomers() };
        }
    }
}
