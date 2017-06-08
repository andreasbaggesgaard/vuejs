<template>
  <div class="data-list">

      <div v-for="item in starwarsdata">
          <div v-if="item.name == selectedItem">

              <h1>{{item.name}}</h1><br />

              <div class="loading" v-if="loading">
                  <h2>Loading...</h2>
              </div>

              <!-- People -->
              <p v-if="item.birth_year"><b>Gender:</b> {{item.gender}}</p>
              <p v-if="item.height"><b>Height:</b> {{item.height}}</p>
              <p v-if="item.birth_year"><b>Birth year:</b> {{item.birth_year}}</p>
              <p v-if="item.skin_color"><b>Skin color:</b> {{item.skin_color}}</p>
              <p v-if="item.hair_color"><b>Hair color:</b> {{item.hair_color}}</p>
              <p v-if="item.eye_color"><b>Eye color:</b> {{item.eye_color}}</p>
              
              <!-- Species -->
              <p v-if="item.language"><b>Language:</b> {{item.language}}</p>
              <p v-if="item.classification"><b>Classification:</b> {{item.classification}}</p>
              <p v-if="item.average_height"><b>Average height:</b> {{item.average_height}}</p>
              <p v-if="item.skin_colors"><b>Skin color(s):</b> {{item.skin_colors}}</p>
              <p v-if="item.hair_colors"><b>Hair color(s):</b> {{item.hair_colors}}</p>
              <p v-if="item.eye_colors"><b>Eye color(s):</b> {{item.eye_colors}}</p>
              <p v-if="item.average_lifespan"><b>Average lifespan:</b> {{item.average_lifespan}}</p>

              <!-- Planets -->
              <p v-if="item.climate"><b>Climate:</b> {{item.climate}}</p>
              <p v-if="item.terrain"><b>Terrain:</b> {{item.terrain}}</p>
              <p v-if="item.population"><b>Population:</b> {{item.population}}</p>
              <p v-if="item.surface_water"><b>Surface water:</b> {{item.surface_water}}</p>
              <p v-if="item.rotation_period"><b>Rotation period:</b> {{item.rotation_period}}</p>
              <p v-if="item.orbital_period"><b>Orbital period:</b> {{item.orbital_period}}</p>
              <p v-if="item.diameter"><b>Diameter:</b> {{item.diameter}}</p>  
          </div>

          <div v-if="showAllItems">
              <router-link :to="{ name: 'item', params: { id: item.name }}">{{item.name}}</router-link>
          </div>
          
      </div>


  </div>
</template>

<script>
export default {
  props:['datasource'],
  name: 'data-list',
  data () {
    return {
      starwarsdata: [],
      selectedItem: '',
      showAllItems: true,
      loading: false,
    }
  },
    created: function(){
        this.retrieveData();
        this.getItemDetails();
    },
    methods: {
        retrieveData: function(){
            this.loading = true;
            let xhr = new XMLHttpRequest();
            let self = this;
            xhr.open('GET', this.datasource);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function(){
                let data = JSON.parse(xhr.responseText);
                self.starwarsdata = data.results;
                self.loading = false;
            }
            xhr.send();   
        },
        getItemDetails: function(){
            let url = window.location.href;
            let getParameter = "";
            let parameterValue = "";

            try {
                getParameter = decodeURIComponent(url);
                parameterValue = getParameter.substr(getParameter.indexOf("detail/") + 7)

                    if (document.location.href.indexOf("detail/") > -1) {
                        console.log(parameterValue)
                        this.selectedItem = parameterValue;
                        this.showAllItems = false;
                    }
            } catch (e) {
                console.error(e);
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
