using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspNetVue.Models
{
    public class Recipe
    {
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public long Key { get; set; }
		public string Name { get; set; }
		public string Image { get; set; }
        public string Category { get; set; }
    } 
}
