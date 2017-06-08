<template id="backend">
    <div>
         <router-link to="/">Back</router-link>&nbsp; | &nbsp;
         <router-link to="/EditPage">Edit page</router-link>&nbsp; | &nbsp;
         <router-link to="/Profile">Profile</router-link>&nbsp; | &nbsp;
         <a href="" v-on:click="logOut">Log out</a>  
        <div class="container">   
    <h5>Hi, <b>{{currentUser.email}}</b></h5>  
<hr /> 

    <h4>Create item</h4>
    <form method="post" enctype="multipart/form-data" v-on:submit.prevent="createItem">
        <div class="row">
            <div class="col-xs-12 col-sm-4">
                <div class="form-group">
                    <label class="label--item">Title</label>
                    <input type="text" class="form-control" placeholder="Title" v-model="newItem.title">
                </div>
            </div>
            <div class="col-xs-12 col-sm-4">
                <div class="form-group">
                    <label class="label--item">Description</label>
                    <input type="text" class="form-control" placeholder="Description" v-model="newItem.description">
                </div> 
            </div>
            
            <uploadimage></uploadimage>
           
            <div class="col-xs-12">
                <div class="pull-right">
                    <button class="btn btn-primary" id="create-item" disabled>Create</button>
                </div>
            </div>
        </div>
    </form>
    <br />

<div v-for="ref1 in placeholderOne">
    <div v-for="ref2 in placeholderTwo">
        <div v-for="ref3 in placeholderThree">
            
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Current items</h3>
            </div>
                <div class="panel-body">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Image
                        </th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr v-for="item in items">
                        <td>
                            {{item.title}}
                        </td>
                        <td>
                            {{trimText(item.description)}}..
                        </td>
                        <td>
                           <img v-bind:src="item.image" alt ="image" width="50"/>
                        </td>
                        <td>
                             <router-link :to="{ name: 'item', params: { title: item['.key'] }}"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></router-link>
                        </td>
                        <td>
                            <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeItem(item, ref1, ref2, ref3)"></span>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
    </div>
    <hr />
            <!-- container ends-->
        </div>
    </div>
</template>

<script> 
import * as config from '@/config.js'
import toastr from 'toastr'
import uploadimage from '@/components/UploadImage'

export default { 
  name: 'backend',
  firebase: {
      items: config.itemsRef,
      placeholderOne: config.p1Ref,
      placeholderTwo: config.p2Ref,
      placeholderThree: config.p3Ref
  },
  data() {
    return {
        newItem: {
            title: '',
            description: '',
            image: ''
        },
        currentUser: firebase.auth().currentUser
    }
  }, 
  computed:{},
  watch:{ 
      
  },
  methods: {
      createItem: function(){
          if(this.newItem.title != '' && this.newItem.description != ''){
              var button = document.getElementById("create-item");
              var img = document.getElementById("image");
              var preview = document.getElementById("remove-src"); 
              var input = document.getElementById("input");

              config.itemsRef.push({title: this.newItem.title, description: this.newItem.description, image: img.src}); 
              toastr.success("Item created: " + this.newItem.title);

              this.newItem.title = '';
              this.newItem.description = '';
              input.value = ''; 
              preview.style.display = "none";
              img.style.display = "none";        
              button.disabled = true;
          } else {
              toastr.error("Fill out the fields");
          }
      },
      removeItem: function(item, ref1, ref2, ref3){
          if(item['.key'] == ref1['id'] || item['.key'] == ref2['id'] || item['.key'] == ref3['id']){
              toastr.error("Item is used on the page!");         
          } else {
              config.itemsRef.child(item['.key']).remove();
              toastr.success("Item removed");
          }
      },
      trimText: function(text){
        var string = text;
        var trimmedString = string.substring(0, 50);
        return trimmedString;
      },
      logOut: function(){
          firebase.auth().signOut().then(function() {
            // Sign-out successful.
            this.$router.push('/'); 
            toastr.success("You are now logged out");
            }).catch(function(error) {
            // An error happened.
         });
      } 
    },
     components: {
    'uploadimage': uploadimage  
  },
   created: function() {    
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData; 
            console.log(email)
            // ...
        } else {
            // User is signed out.
            // ...
            //this.$router.push('/'); 
            window.location = "http://localhost:8080/#/";
        }
     });  
     
   }
};
</script>

<style>
    thead th {
       text-align: center;
    }
    h4 {
        text-align: left;
    }
    .label--item {
        float: left;
    }
    td a span {
        color: black;
    }
    td span:hover {
        cursor: pointer;
    }
    .panel-default {
        /*box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);*/
    }
</style>