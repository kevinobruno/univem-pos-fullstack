using HotelSol.Application.Interfaces;
using HotelSol.Application.ViewModels;
using HotelSol.Domain.Interfaces;

namespace HotelSol.Application.Services
{
    public class RoomService : IRoomService
    {

        public IRoomRepository _repository;

        public RoomService(IRoomRepository repository)
        {
            _repository = repository;
        }

        public RoomViewModel GetRooms()
        {
            return new RoomViewModel() { Rooms = _repository.GetRooms() };
        }
    }
}
