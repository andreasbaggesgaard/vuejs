using System;
using System.Collections.Generic;

namespace AspNetVue.Models
{
    
	public interface IRecipeRepository
	{
		void Add(Recipe item);
		IEnumerable<Recipe> GetAll();
		Recipe Find(long key);
		void Remove(long key);
		void Update(Recipe item);
	}
}
