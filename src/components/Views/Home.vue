<template>
  <div>
  <Button class="buttons"> </Button>
   <Card/> 
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

import Card from '../Cards/Card'
import Button from '../Button'

export default {
  name: 'home',
  components: {
    Card,
    Button
  }
}
</script>