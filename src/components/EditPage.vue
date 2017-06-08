<template id="edit-page">
    <div>
        <router-link to="/Backend">Back</router-link>&nbsp; | &nbsp;
        <router-link to="/">Go to page</router-link>
        <hr />

    <h1>Edit page</h1><br />
    <div class="container">
         <div class="row">

        <div v-for="refId in placeholderOne">
            <div v-for="itmId in items">
                <form method="post" enctype="multipart/form-data" v-on:submit.prevent="EditPage1(refId, itmId)" id="form1" v-if="itmId['.key'] == refId['id']">
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label >Item 1</label> 
                                <div v-for="itm in items">
                                    <div v-if="itm['.key'] == refId['id']">
                                        <select class="form-control" v-model="newItem1.id" name="dropdown">
                                            <option value="" hidden>{{itm.title}}</option>
                                            <option selected v-bind:value="itm['.key']">{{itm.title}}</option>
                                            <option v-for="item in items" v-bind:value="item['.key']" v-if="item.title != itm.title">{{item.title}}</option>
                                        </select> 
                                    </div> 
                                </div>							
                            </div>
                            <button class="btn btn-primary" id="button1"></button>
                        </div>
                    </form> 
                </div>
            </div>

       <div v-for="refId in placeholderTwo">
            <div v-for="itmId in items">
                <form method="post" enctype="multipart/form-data" v-on:submit.prevent="EditPage2(refId, itmId)" id="form2" v-if="itmId['.key'] == refId['id']">
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label >Item 2</label>
                                <div v-for="itm in items">
                                    <div v-if="itm['.key'] == refId['id']">
                                        <select class="form-control" v-model="newItem2.id" name="dropdown">
                                            <option value="" hidden>{{itm.title}}</option>
                                            <option selected v-bind:value="itm['.key']">{{itm.title}}</option>
                                            <option v-for="item in items" v-bind:value="item['.key']" v-if="item.title != itm.title">{{item.title}}</option>
                                        </select> 
                                    </div> 
                                </div>							
                            </div>
                            <button class="btn btn-primary" id="button2"></button>
                        </div>
                    </form> 
                </div>
            </div>

        <div v-for="refId in placeholderThree">
            <div v-for="itmId in items">
                <form method="post" enctype="multipart/form-data" v-on:submit.prevent="EditPage3(refId, itmId)" id="form3" v-if="itmId['.key'] == refId['id']">
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label >Item 3</label>
                                <div v-for="itm in items">
                                    <div v-if="itm['.key'] == refId['id']">
                                        <select class="form-control" v-model="newItem3.id" name="dropdown">
                                            <option value="" hidden>{{itm.title}}</option>
                                            <option selected v-bind:value="itm['.key']">{{itm.title}}</option>
                                            <option v-for="item in items" v-bind:value="item['.key']" v-if="item.title != itm.title">{{item.title}}</option>
                                        </select> 
                                    </div> 
                                </div>							
                            </div>
                            <button class="btn btn-primary" id="button3"></button>
                        </div>
                    </form> 
                </div>
            </div>

            <div v-for="ref in showItems" class="pull-left">
                <form method="post" enctype="multipart/form-data" v-on:submit.prevent="ShowRemainingItems(ref)">
                    &nbsp;&nbsp;&nbsp;&nbsp;<label for="checkbox">Show remaining items on frontpage</label> &nbsp;
                    <input type="checkbox" id="checkbox" v-model="checked.value = ref['value']" v-if="ref['value'] == true" checked>
                    <input type="checkbox" id="checkbox" v-model="checked.value = ref['value']"  v-else>
                    <!--<label for="checkbox">{{ checked.value }}</label>-->
                    <button class="btn btn-primary" id="button4"></button>
                </form>
            </div>

             <div class="col-xs-12">
                <div class="pull-right">
                    <button class="btn btn-primary" v-on:click.prevent="ExecuteForms">Edit page</button>
                </div>
            </div>

            <div class="col-xs-12 col-sm-8">
                <hr />
                <div v-for="ref in menu">
                <form method="post" enctype="multipart/form-data" v-on:submit.prevent="CreateMenu(ref)">
                    <h3>Create menu</h3>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in items">
                            <td>
                                {{item.title}}
                            </td>
                        
                            <td>
                                <img v-bind:src="item.image" alt ="image" width="50"/>
                            </td>
                            <td>
                                <input class="boxes" v-model="checkedItems.title" name="checkbox" v-bind:id="item['.key']" type="checkbox" v-bind:value="item.title">
                            </td>
                        </tr>
                    </tbody>
                </table>
            <button class="btn btn-primary" id="button5"></button>
            </form>
                {{checkedItems.title}}
        </div>

                
            </div>
            <div class="col-xs-12 col-sm-4" id="structure">
                <br /><br />
                <h4>Current menu structure</h4>
                <div v-for="ref in menu">              
                    <div v-for="title in ref['title']">
                        <li v-bind:id="title">{{title}}</li>
                    </div>
                </div>
            </div>


        <!-- -->        
        </div>
    </div>
</div>

  
</template>

<script>
import * as config from '@/config.js'
import toastr from 'toastr'

export default {
  name: 'edit-page',  
  firebase: {
         items: config.itemsRef,
         placeholderOne: config.p1Ref,
         placeholderTwo: config.p2Ref,
         placeholderThree: config.p3Ref,
         showItems: config.show,
         menu: config.menu
     },
  data() {
    return {
        checked: {
            value: ''
        },
        checkedItems:{
            title: []
        },
        newItem1: {
            id: '',
        },
        newItem2: {
            id: '',
        },
        newItem3: {
            id: '',
        }
    } 
  },
  created: function(){
     //this.checkedNames = this.getValue();  
  },
  methods: {
      CreateMenu: function(ref){     
          config.menu.child(ref['.key']).remove();
          config.menu.push(this.checkedItems)
      },
      ShowRemainingItems: function(ref){
          config.show.child(ref['.key']).remove();
          config.show.push(this.checked)
      },
      EditPage1: function(refId, itmId){
          var form = document.getElementById("form1")        
          if (form.dropdown.selectedIndex ==  0) this.newItem1.id = itmId['.key']
          config.p1Ref.child(refId['.key']).remove();
          config.p1Ref.push(this.newItem1)
          //config.p1Ref.child(refId['.key']).update({"id": this.newItem1.id});
      },
      EditPage2: function(refId, itmId){
          var form = document.getElementById("form2")        
          if (form.dropdown.selectedIndex ==  0) this.newItem2.id = itmId['.key'] 
          config.p2Ref.child(refId['.key']).remove();
          config.p2Ref.push(this.newItem2)
      }, 
      EditPage3: function(refId, itmId){
          var form = document.getElementById("form3")        
          if (form.dropdown.selectedIndex ==  0) this.newItem3.id = itmId['.key'] 
          config.p3Ref.child(refId['.key']).remove();
          config.p3Ref.push(this.newItem3)
      },
      ExecuteForms: function(){
           window.setTimeout(function() {
           
  
        document.getElementById("button1").click();
          window.setTimeout(function() {
            document.getElementById("button2").click();
        }, 1);
        window.setTimeout(function() {
            document.getElementById("button3").click();
        }, 1);
        window.setTimeout(function() {
            document.getElementById("button4").click();
        }, 1);
        if(jQuery('input[name="checkbox"]:checked').length > 0){
              window.setTimeout(function() {
                document.getElementById("button5").click();
            }, 1); 
        } 
        toastr.success("Page updated");
        this.$router.push('/');     
              }, 1);   
      }
  } 
}


</script>

<style>
    #button1, #button2, #button3, #button4, #button5 {
        visibility: hidden; 
    }
    #structure {
        padding-left: 7%;
    }
    #structure li {
        text-align: left;
    }
</style>