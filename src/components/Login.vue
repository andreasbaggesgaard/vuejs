<template id="log-in-component">
  <div>

<transition name="modal">
    <div class="modal-mask" v-if="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">

<a href="#"  v-on:click="select1">Create user</a>&nbsp; | &nbsp;
<a href="#" v-on:click="select2">Login</a>&nbsp; | &nbsp;
<a href="#" v-on:click="select3">Facebook login</a>
<hr />

<transition name="fade">
    <div v-if="show1">
    <h5><b>Create user</b></h5>
        <form method="post" enctype="multipart/form-data" v-on:submit.prevent="createUser">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="" placeholder="Email" v-model="newUser.email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="" placeholder="Password" v-model="newUser.password">
            </div> 
            <button type="submit" class="btn btn-primary">Create user</button> 
        </form> 
     </div>
  </transition>

  <transition name="fade">
    <div v-if="show2">
     <h5><b>Login</b></h5>
    <form method="post" enctype="multipart/form-data" v-on:submit.prevent="logIn">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="" placeholder="Email" v-model="User.email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="" placeholder="Password" v-model="User.password">
            </div> 
            <button type="submit" class="btn btn-primary">Login</button>&nbsp;&nbsp;
            <a v-on:click="resetPassword">Reset password</a>
        </form> 
        </div>
  </transition>

  <transition name="fade">
      <div v-if="show3">
        <h5><b>Facebook login</b></h5>
        <a href="" v-on:click.prevent="facebookLogin">Login</a>
      </div>
  </transition>
<hr />

  <button class="btn btn-default" v-on:click="showModal = false">Close</button>

        </div>
      </div>
    </div>
 </transition>

<button id="show-modal" class="btn btn-danger backend" v-on:click="promptModal" v-if="!userInSession">
    Enter backend &nbsp;&nbsp;
    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true">
</span></button>

<router-link to="Backend" class="btn btn-success backend" v-else>
    Enter backend &nbsp;&nbsp;
    <span class="glyphicon glyphicon-ok" aria-hidden="true">
</span></router-link>

  </div>
</template>
  
<script>
import * as config from '@/config.js'
import toastr from 'toastr'  
 
export default {
  name: 'log-in-component', 
   firebase: {

  },
  data() {
    return {
        newUser: {
            email: '',
            password: ''
        },
        User: {
            email: '',
            password: ''
        },
        show1: false,
        show2: false,
        show3: false,
        showModal: false,
        userInSession: firebase.auth().currentUser
    }  
  },
  created: function(){
       var user = firebase.auth().currentUser;
       if(user) this.userInSession = true
  },
  methods: {
      promptModal: function(){
          this.showModal = true;
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
      },
      select1: function(){
          this.show1 = true;
          this.show2 = false;
          this.show3 = false;
      },
      select2: function(){
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
      },
      select3: function(){
          this.show1 = false;
          this.show2 = false;
          this.show3 = true;
      },
      createUser: function(){
          var email = this.newUser.email
          var password = this.newUser.password
          firebase.auth().createUserWithEmailAndPassword(email, password).then(function (response) {
            console.log(response)
            toastr.success("User added: " + email);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code; 
            var errorMessage = error.message;
            console.log(errorMessage)
            if(errorMessage){
                toastr.error(errorMessage);      
            }   
        });       
      },
      logIn: function(){
          var email = this.User.email
          var password = this.User.password
          firebase.auth().signInWithEmailAndPassword(email, password).then(function (response) {
            window.location = "http://localhost:8080/#/Backend"
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code; 
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            if(errorMessage){
                toastr.error(errorMessage);
            } 
         });
      },
      resetPassword: function(){
            var auth = firebase.auth();
            var emailAddress = this.User.email;

            auth.sendPasswordResetEmail(emailAddress).then(function() {
            // Email sent.
                toastr.success("Reset password sent to " + emailAddress);
            }, function(error) {
            // An error happened.
                console.log(error)
                if(error){
                    toastr.error(error.message);
                }                          
            });

      },
      facebookLogin: function(){
          //signInWithRedirect
         var provider = new firebase.auth.FacebookAuthProvider();
         
         firebase.auth().signInWithPopup(provider).then(function (response) {
            window.location = "http://localhost:8080/#/Backend"
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code; 
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
         });
      }
  },
  components: {}
}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.backend {
    right: 10px;
    top: 9px;
    position: absolute;
}
.modal-mask {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
