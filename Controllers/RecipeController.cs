using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetVue.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recipeWebApis.Controllers
{
    [Route("api/[controller]")]
    public class RecipeController : Controller
    {
        private readonly IRecipeRepository _recipeRepository;

        public RecipeController(IRecipeRepository recipeRepository)
		{
			_recipeRepository = recipeRepository;
		}

		[HttpGet]
		public IEnumerable<Recipe> GetAll()
		{
			return _recipeRepository.GetAll();
		}

		[HttpGet("{id}", Name = "GetRecipe")]
		public IActionResult GetById(long id)
		{
			var item = _recipeRepository.Find(id);
			if (item == null)
			{
				return NotFound();
			}
			return new ObjectResult(item);
		}

		[HttpPost]
		public IActionResult Create([FromBody] Recipe item)
		{
			if (item == null)
			{
				return BadRequest();
			}

			_recipeRepository.Add(item);

			return CreatedAtRoute("GetRecipe", new { id = item.Key }, item);
		}

		[HttpPut("{id}")]
		public IActionResult Update(long id, [FromBody] Recipe item)
		{
			if (item == null || item.Key != id)
			{
				return BadRequest();
			}

			var recipe = _recipeRepository.Find(id);
			if (recipe == null)
			{
				return NotFound();
			}

            recipe.Category = item.Category;
			recipe.Name = item.Name;
            recipe.Image = item.Image;

			_recipeRepository.Update(recipe);
			return new NoContentResult();
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(long id)
		{
			var todo = _recipeRepository.Find(id);
			if (todo == null)
			{
				return NotFound();
			}

			_recipeRepository.Remove(id);
			return new NoContentResult();
		}

    }
}
