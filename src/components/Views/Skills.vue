<template>
  <div>
    <Button class="buttons"> </Button>
    <CardSkills/>
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
import CardSkills from '../Cards/CardSkills'
import Button from '../Button'

export default {
  name: 'skills',
  components: {
    CardSkills,
    Button
  }
}
</script>