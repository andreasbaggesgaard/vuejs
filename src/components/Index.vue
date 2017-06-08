<template id="page-layout-component">
  <div>

  <navbar></navbar>
  <signupform></signupform>

<div class="row">
  <div class="col-md-12">
     <placeholder :data="items" :source="placeholderOne"></placeholder> 
  </div>  
</div>  

<div class="row">
    <div class="col-xs-12 col-md-6">
        <placeholder :data="items" :source="placeholderTwo"></placeholder>  
    </div>

    <div class="col-xs-12 col-md-6">
        <placeholder :data="items" :source="placeholderThree"></placeholder> 
    </div>


    <div v-for="ref1 in placeholderOne">
      <div v-for="ref2 in placeholderTwo">
        <div v-for="ref3 in placeholderThree">
            <div v-for="item in items">
              <div v-if="item['.key'] != ref1['id'] && item['.key'] != ref2['id'] && item['.key'] != ref3['id']">
                <div v-for="state in showRemainingItems">
                  <div v-if="state['value'] == true">                    
                      <img v-bind:src="item.image" width="90%"/>
                        <div class="item__title">
                            <h4>{{item.title}}</h4>
                        </div>
                        <div class="item__text">
                            <p>{{trimText(item.description)}}..</p>
                      </div>  
                      <br />
                      <router-link :to="{ name: 'page', params: { title: item.title }}">Read more about {{item.title}}</span></router-link>    
                      <br /><br/>            
                  </div>
                </div>            
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
      
  </div>
</template>
 
<script>
import placeholder from '@/components/Placeholder'
import navbar from '@/components/Navbar'
import signupform from '@/components/Login'
import * as config from '@/config.js' 
 
export default {
  name: 'page-layout-component', 
   firebase: {
      items: config.itemsRef,
      placeholderOne: config.p1Ref,
      placeholderTwo: config.p2Ref,
      placeholderThree: config.p3Ref,
      showRemainingItems: config.show
  },
  data() {
    return {}  
  },
  methods: {
    trimText: function(text){
        var trimmedString = text.substring(0, 100);
        return trimmedString;
      }
  },
  components: {
    'placeholder': placeholder, 
    'navbar': navbar,
    'signupform': signupform
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
.flex-grid__container {
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.flex-grid {
      display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
}
.flex-grid__item {
  width: 50%;
}
</style>
