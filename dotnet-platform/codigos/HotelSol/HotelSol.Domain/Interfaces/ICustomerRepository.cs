using HotelSol.Domain.Models;

namespace HotelSol.Domain.Interfaces
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetCustomers();
    }
}
