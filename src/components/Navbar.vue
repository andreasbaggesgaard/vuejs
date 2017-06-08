<template id="navbar">
    <div>
        <nav class="navbar navbar-inverse navbar-top">
            <div class="container">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand"><router-link to="/">CMS</router-link></a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav" v-for="ref in menu">
                    <li v-for="title in ref['title']" style="color: white;"><router-link :to="{ name: 'page', params: { title: title }}">{{title}}</span></router-link></li>
                </ul>  
             </div><!--/.nav-collapse -->
           </div>
       </nav>

    </div> 
</template>

<script>
import * as config from '@/config.js'

export default {
  name: 'navbar',  
  firebase: {
      menu: config.menu 
  },
  data() {
    return {} 
  }, 
}
</script>
<style>
    .navbar {
        top: -60px;
    }
    .navbar a {
        color: white;
    }
</style>