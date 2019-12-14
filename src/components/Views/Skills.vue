<template class="container">
  <div>
    <div class="button">
      <Button/>
    </div>
    <CardSkills/>
  </div>
</template>

<style>
  .container {
    width: 60px;
    height: 60px;
  }
  .button {
    transform: translate(30%, 50%);
  }
</style>

<script>
import Button from '../Button.vue'
import CardSkills from '../Cards/CardSkills.vue'

export default {
  name: 'skills',
  components: {
    Button,
    CardSkills
  }
}
</script>