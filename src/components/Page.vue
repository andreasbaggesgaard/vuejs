<template id="page">
    <div>
      <navbar></navbar>
      
      <div v-for="item in items">
            <div v-if="item['title'] == $route.params.title">
                <h2>{{item.title}}</h2>
                <img v-bind:src="item.image" width="600" v-bind:alt="item.title" class="img-thumbnail" />
                <br /><br />
                <p>{{item.description}}</p>
            </div>
      </div>

    </div>
</template>

<script>

import * as config from '@/config.js'
import navbar from '@/components/Navbar'

export default {
  template: '#page',
  firebase: {
      items: config.itemsRef
  },
  data: function() {
      return {}
  },
  components: {
    'navbar': navbar  
  }
};
</script>
<style>
  p {
    max-width: 70%;
    margin: 0 auto;
  }
</style>

<!-- <template id="page">
    <div>
 <navbar></navbar>
        <h2>{{$route.params.title}}</h2>
        <router-link to="/">Back</router-link>
       
    </div> 
</template>
<script>
import * as config from '@/config.js'
import navbar from '@/components/Navbar'

export default {
  name: 'navbar',   
  firebase: {
      items: config.itemsRef
  },
  data() {
    return {} 
  }, 
  methods:{},
  components: {
    'navbar': navbar 
  }
}
</script>-->