<template>
  <div>
    <Button class="buttons"> </Button>
    <CardProjects/>
  </div>
</template>

<style>
.buttons {
   max-width:800px;
   max-height:500px;
   display: block;
   margin-left: auto;
   margin-right: auto;
   margin-top: 40px;
}
</style>


<script>

import CardProjects from '../Cards/CardProjects.vue'
import Button from '../Button'

export default {
  name: 'projects',
  components: {
    CardProjects, 
    Button
  }
}
</script>