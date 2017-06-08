<template id="placeholder-one">
  <div>
    <div v-for="item in data">
        <div v-for="ref in source">
            <div v-if="ref['id'] == item['.key']">   
                <div class="item">
                  <div class="item--aligner">
                      <img v-bind:src="item.image" width="90%"/>
                      <div class="item__title">
                          <h4>{{item.title}}</h4>
                      </div>
                      <div class="item__text"> 
                          <p>{{trimText(item.description)}}..</p>
                      </div>
                    </div>
                    <br />
                    <router-link :to="{ name: 'page', params: { title: item.title }}">Read more about {{item.title}}</span></router-link>
                </div>
            </div>
         </div>  
      </div>   
        <br />
  </div>
</template>

<script>

export default {
  name: 'placeholder-one',  
  props: ['data', 'source'],
  data() {
    return {} 
  },
  methods: {
     trimText: function(text){
        var trimmedString = text.substring(0, 100);
        return trimmedString;
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item__title h4 {
  text-align: center;
}
/*.item {
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.item--aligner {
  max-width: 50%;
}*/
</style>
