using HotelSol.Domain.Interfaces;
using HotelSol.Domain.Models;
using HotelSol.Infra.Data.Context;

namespace HotelSol.Infra.Data.Repositories
{
    public class RoomRepository : IRoomRepository
    {
        public HotelSolDbContext _context;

        public RoomRepository(HotelSolDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Room> GetRooms()
        {
            return _context.Room;
        }
    }
}
