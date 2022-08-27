using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using HotelSol.Application.Interfaces;
using HotelSol.Application.Services;
using HotelSol.Domain.Interfaces;
using HotelSol.Infra.Data.Repositories;

namespace HotelSol.Infra.IoC
{
    public static class DependencyContainer
    {
        public static IServiceCollection RegisterServices(
            this IServiceCollection services, IConfiguration configuration)
        {
            // HotelSol.Application
            services.AddScoped<IBookingService, BookingService>();
            services.AddScoped<ICustomerService, CustomerService>();
            services.AddScoped<IRoomService, RoomService>();

            // HotelSol.Domain | HoteSol.Infra.Data
            services.AddScoped<IBookingRepository, BookingRepository>();
            services.AddScoped<ICustomerRepository, CustomerRepository>();
            services.AddScoped<IRoomRepository, RoomRepository>();

            return services;
        }
    }
}
