<template>
  <div class="item-detail">

    <router-link to="/" class="link">Back</router-link><br /><br />

    <list datasource="http://swapi.co/api/planets/"></list>
    <list datasource="http://swapi.co/api/species/"></list>
    <list datasource="http://swapi.co/api/people/"></list>

    <div class="loading" v-if="loading">
       <h2>Loading...</h2>
    </div>

  </div>
</template>

<script>
import list from '@/components/List'

export default {
  name: 'item-detail',
  data () {
    return {
      loading: false,
    }
  },
    created: function(){
        /*this.fetchData("http://swapi.co/api/planets/", this.items);
        this.fetchData("http://swapi.co/api/species/", this.items2);
        this.fetchData("http://swapi.co/api/people/", this.items3);*/
    },
    watch: {
    /*'$route': 'fetchData'*/
    },
    methods: {
       /*fetchData (url, yo) {
        this.loading = true

         var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open('GET', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function(){
                var data = JSON.parse(xhr.responseText);
                //console.log(data.results);
                
                //self.items = data.results
                yo = data.results
                console.log(yo)
                self.loading = false;
            }
            xhr.send();
        }*/
    },
    components: {
    'list': list, 
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>