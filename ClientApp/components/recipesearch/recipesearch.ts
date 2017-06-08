import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { environment } from '../recipesearch/environment';

interface Recipe {
    name: string;
    image: string;
    category: string;
} 

@Component
export default class recipedataComponent extends Vue {
    recipes: Recipe[] = [];
    searchTerm: string = ""; 
    categoryList: Array<string> = []; 
    filterList: Array<Recipe> = [];
    recipeCount: number;
    loading: boolean =  false; 

         
    mounted() {
        this.fetchAPIdata();
    }

    fetchAPIdata(){
        this.loading = true;

         fetch(environment.recipeSearchAPIURL)
            .then(response => response.json() as Promise<Recipe[]>)
            .then(data => {
                this.recipes = data
                this.loading = false;
        });
    }

    get countRecipes(){
        return this.recipeCount = this.recipes.length;     
    }
     
    get filteredRecipeList() {
            let self = this;
                               
            let filterByCat = this.recipes.filter(function(item) {
	            let cats = item.category.split(' ');

				return cats.filter(function(cat) {
				       return self.categoryList.indexOf(cat) > -1;
				    }).length === self.categoryList.length;      
            });
            this.recipes = filterByCat;

        return this.recipes.filter((Recipe) => {
            return Recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            || Recipe.category.toLowerCase().includes(this.searchTerm.toLowerCase())
            && filterByCat;
            });
     } 

	 filterCategory(e){
        let clickedElement = e.target.id;
	    this.categoryList.push(clickedElement);
        this.hideCategory(clickedElement);
     }

     removeCategory(index, item){
        this.categoryList.splice(index, 1);
        this.showCategory(item);   
        this.fetchAPIdata();

        let self = this;
        let filterByCat;
                         
            filterByCat = this.recipes.filter(function(item) {
                let cats = item.category.split(' ');

                return cats.filter(function(cat) {
                       return self.categoryList.indexOf(cat) > -1;
                    }).length === self.categoryList.length;      
            });

             filterByCat.forEach(function(item) {
                self.filterList.push(item);
             });

            setTimeout(function(){ 
	            let i;
	            let j;

				for (i = 0; i < self.recipes.length; i++) {
                  
                    for (j = 0; j < self.filterList.length; j++) {

                        if(self.recipes[i].name == self.filterList[j].name) {
                            this.recipes = self.recipes[i];
                        } 
                    }             
				}
                 
            }, 1);
      }

    clearSearch() {
        this.categoryList = [];
        this.searchTerm = "";

        let items = document.getElementsByClassName("active");
	        for (let i = items.length -1; i >= 0; --i) {
			    let item = items[i];  
	            item.className = "";
	            item.className += "not-active";
	            console.log(item)
			}
        
        this.fetchAPIdata();
    }
     
    hideCategory(id: string) { 
        let item = document.getElementById(id);
        item.className = "";
        item.className += "active";
    }

    showCategory(id: string) {
        let item = document.querySelector(".categories #" + id);
        item.className = "";
        item.className += "not-active";
    }


}
