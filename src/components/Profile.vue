<template id="user-profile-component">
  <div>
    <router-link to="/Backend">Back</router-link><br /><br />
      {{currentUser}} 
  </div>
</template>    
     
<script>
import * as config from '@/config.js'
import toastr from 'toastr'  
 
export default {
  name: 'user-profile-component', 
  firebase: {}, 
  data() { 
    return { 
        currentUser: firebase.auth().currentUser 
    }  
  },  
  watch: function(){
      var user = firebase.auth().currentUser;
        if (user != null) {
        user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: "+profile.providerId);
            console.log("  Provider-specific UID: "+profile.uid);
            console.log("  Name: "+profile.displayName);
            console.log("  Email: "+profile.email);
            console.log("  Photo URL: "+profile.photoURL);
        }); 
    } 
  }, 
  methods: {
 
  },
  components: {}
}

</script>

<style>

</style>
