<template>
  <div class="item-detail">

    <router-link to="/" class="link">Back</router-link><br /><br />

    <list datasource="http://swapi.co/api/planets/"></list>
    <list datasource="http://swapi.co/api/species/"></list>
    <list datasource="http://swapi.co/api/people/"></list>

  </div>
</template>

<script>
import list from '@/components/List'

export default {
  name: 'item-detail',
  data () {
    return {}
  }, 
    components: {
    'list': list, 
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>