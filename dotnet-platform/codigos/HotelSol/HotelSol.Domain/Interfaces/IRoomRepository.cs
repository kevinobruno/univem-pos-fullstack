using HotelSol.Domain.Models;

namespace HotelSol.Domain.Interfaces
{
    public interface IRoomRepository
    {
        IEnumerable<Room> GetRooms();
    }
}
