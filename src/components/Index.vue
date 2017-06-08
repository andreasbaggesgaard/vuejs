<template>
  <div class="index">

    <div class="row">
      
      <img src="../assets/logo02.png"  width="200"/><br /><br />

      <div class="col-md-4">
        <h3>Planets</h3><br />
        <list datasource="http://swapi.co/api/planets/"></list>
      </div>

      <div class="col-md-4">
        <h3>Species</h3><br />
        <list datasource="http://swapi.co/api/species/"></list>
      </div>

      <div class="col-md-4">
        <h3>People</h3><br />
        <list datasource="http://swapi.co/api/people/"></list>
      </div>

    </div>

  </div>
</template>

<script>
import list from '@/components/List'

export default {
  name: 'index',
   components: {
    'list': list, 
  } 
}
</script> 

<style>

</style>