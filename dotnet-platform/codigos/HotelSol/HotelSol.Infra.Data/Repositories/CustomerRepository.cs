using HotelSol.Domain.Interfaces;
using HotelSol.Domain.Models;
using HotelSol.Infra.Data.Context;

namespace HotelSol.Infra.Data.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        public HotelSolDbContext _context;

        public CustomerRepository(HotelSolDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Customer> GetCustomers()
        {
            return _context.Customer;
        }
    }
}
