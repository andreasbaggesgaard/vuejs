using System;
using System.Collections.Generic;
using System.Linq;

namespace AspNetVue.Models
{
    public class RecipeRepository : IRecipeRepository
    {
		private readonly RecipeContext _context;

		public RecipeRepository(RecipeContext context)
		{
			_context = context;
            int count = 240;

            if (_context.Recipes.Count() < 1440)
            {
                for (int i = 0; i < count; i++)
                {
					Add(new Recipe { Name = "opskrift01", Category = "Forår nul-tredive", Image = "https://www.voresmad.dk/~/media/voresmad/recipes/s/spanske-koedboller-al-bondigas-med-ovnstegte-kartofler.jpg?h=auto&la=da&mw=300&w=300" });
					Add(new Recipe { Name = "opskrift02", Category = "Sommer nul-tredive", Image = "https://www.voresmad.dk/~/media/voresmad/recipes/t/thailandskrisnudelsalatmedhakketkoed.jpg?h=auto&la=da&mw=300&w=300" });
					Add(new Recipe { Name = "opskrift03", Category = "Frokost en-to Fest", Image = "https://www.voresmad.dk/~/media/voresmad/recipes/k/kalveleverpostej.jpg?mw=250" });
					Add(new Recipe { Name = "opskrift04", Category = "Hverdag en-to Hovedretter", Image = "https://www.voresmad.dk/~/media/voresmad/recipes/k/kikaertekotelettermedforfriskendemelonsalat.jpg?mw=250" });
					Add(new Recipe { Name = "opskrift05", Category = "Sommer Fest nul-tredive", Image = "https://www.voresmad.dk/~/media/voresmad/recipes/c/confiteretnakkemedsproedrugogsommergroent.jpg?mw=250" });
					Add(new Recipe { Name = "opskrift06", Category = "Forår Hverdag en-to Frokost", Image = "https://www.voresmad.dk/~/media/voresmad/recipes/r/ribbensstegmedlakridsogcitrus.jpg?h=auto&la=da&mw=300&w=300" });
                }

			} 

		}

		public IEnumerable<Recipe> GetAll()
		{
			return _context.Recipes.ToList();
		}

		public void Add(Recipe item)
		{
			_context.Recipes.Add(item);
			_context.SaveChanges();
		}

		public Recipe Find(long key)
		{
			return _context.Recipes.FirstOrDefault(t => t.Key == key);
		}

		public void Remove(long key)
		{
			var entity = _context.Recipes.First(t => t.Key == key);
			_context.Recipes.Remove(entity);
			_context.SaveChanges();
		}

		public void Update(Recipe item)
		{
			_context.Recipes.Update(item);
			_context.SaveChanges();
		}
    }
}
