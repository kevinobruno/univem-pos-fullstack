using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace HotelApp.Models
{
    public class Customer
    {
        public int Id { get; set; }

        public string Name { get; set; }

        [Display(Name="CPF")]
        public string DocumentNumber { get; set; }

        [Display(Name="Endereço")]
        public string Address { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        [Display(Name="Data de Nascimento")]
        [DataType(DataType.Date)]
        public DateTime BirthDate { get; set; }
    }
}
