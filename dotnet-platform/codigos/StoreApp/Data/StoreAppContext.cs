using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StoreApp.Models;

    public class StoreAppContext : DbContext
    {
        public StoreAppContext (DbContextOptions<StoreAppContext> options): base(options)
        {
        }

        public DbSet<StoreApp.Models.ProductModel> ProductModel { get; set; } = default!;

        public DbSet<StoreApp.Models.CategoryModel> CategoryModel { get; set; }
    }
