<template id="page-layout-component">
  <div>
    <div v-for="item in items">
      <div v-for="ref in placeholderOne">
          <div v-if="ref['.value'] == item['.key']">
              {{item}}
          </div>
        </div>     
      </div>
    <router-link to="Backend">backend</router-link>
  </div>
</template>

<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBqetVFN_l8gSRy6NxMbp5NSfg6NfzWdyg",
    authDomain: "cmsproject-f37cb.firebaseapp.com",
    databaseURL: "https://cmsproject-f37cb.firebaseio.com",
    storageBucket: "cmsproject-f37cb.appspot.com",
    messagingSenderId: "560833659351"
  };

let app = firebase.initializeApp(config); 
let db = app.database(); 

let itemsRef = db.ref('items');
let p1Ref = db.ref('placeholderOne');

export default {
  name: 'page-layout-component',
  firebase: {
    items: itemsRef,
    placeholderOne: p1Ref
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
</style>
