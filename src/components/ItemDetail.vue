<template id="item-detail">
    <div>
    <router-link to="/Backend">Back</router-link>

        <div v-for="item in items">
            <div v-if="item['.key'] == $route.params.title">

                <div class="container">
                    <hr /> 
                    <h4>Update item</h4><br />
                        <form method="post" enctype="multipart/form-data" v-on:submit.prevent="updateItem(item)">
                            <div class="row">
                                  <div class="pull-right">
                                        <button class="btn btn-primary" id="create-item">Save</button>
                                    </div>  

                                 <div class="col-xs-8">
                                    <img v-bind:src="item.image" id="current-image" v-bind:alt="item.title" /> 
                                 </div>

                                <div class="col-xs-12 col-sm-4">
                                    <div class="form-group">
                                        <label class="label--item">Title</label>
                                        <input type="text" class="form-control" v-model="item.title">
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <textarea class="form-control" v-model="item.description" rows="8" id="comment"></textarea>
                                    </div>                              
                                </div>

                                <div class="col-xs-12 col-sm-4" id="upload-image">
                                    <uploadimage></uploadimage>                                                                              
                                </div>
                        
                            </div>
                        </form>  
                        <hr />  
                    </div>
          
            </div>
        </div>
    </div>
</template>

<script>

import * as config from '@/config.js'
import toastr from 'toastr' 
import uploadimage from '@/components/UploadImage'

export default {
  template: '#item-detail',
  firebase: {
      items: config.itemsRef
  },
  data: function() {
      return {}
  },
  watch: {},
  methods: {
      updateItem: function(item){
          var img = document.getElementById("image");
          var currentImg = document.getElementById("current-image");
          var firebasePath = "firebasestorage";
          if(!img.src.includes(firebasePath)) img.src = currentImg.src

          config.itemsRef.child(item['.key']).update({"title": item.title, "description": item.description, "image": img.src });
          toastr.success("Item updated");

            var img = document.getElementById("image");
             var removeSrc = document.getElementById("remove-src");    
             var input = document.getElementById("input"); 
             removeSrc.style.display = "none";
             img.style.display = "none";
             input.value = ''; 
          //this.$router.push('/Backend');      
      }
  },
  components: {
    'uploadimage': uploadimage  
  }
};
</script>
<style>
    #remove-src {
        margin-top: 30%;
    }
    #loader {
        margin-left: 60px !important;
    }
    #current-image {
        float: left;
        max-width: 100%;
        min-width: 100%;
    }
    #upload-image {
        float: right;
    }
    textarea {
        resize: none;
    }
    label {
        float: left;
    }
</style>
