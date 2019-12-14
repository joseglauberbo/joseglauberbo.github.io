<template class="container">
  <div>
    <div class="button">
      <Button/>
    </div>
    <Card/>
  </div>   
</template>


<style>
  .container {
  width: inherit;
  height: inherit;
  margin: 0;
  padding: 0;
  }
  .button {
    transform: translate(30%, 50%);
  }
  .home {
  padding: 0;
  margin: 0;
  background-color: #1C1C1C;
  }
</style>

<script>
import Card from '../Cards/Card.vue'
import Button from '../Button.vue'

export default {
  name: 'home',
  components: {
    Button,
    Card
  }
}
</script>