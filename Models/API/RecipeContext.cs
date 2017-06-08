using System;
using Microsoft.EntityFrameworkCore;

namespace AspNetVue.Models
{
    public class RecipeContext : DbContext
    {
		public RecipeContext(DbContextOptions<RecipeContext> options) : base(options)
	    {
            
		}
	    public DbSet<Recipe> Recipes { get; set; }
    }
}
