<template>
  <div class="home">
    <div class="button">
      <Button/>
    </div>
    <Card/>
  </div>   
</template>


<style>
  .button {
    transform: translate(30%, 50%);
  }
  .home {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #1C1C1C;
  }
</style>

<script>
import Card from './Card.vue'
import Button from './Button.vue'
export default {
  name: 'home',
  components: {
    Button,
    Card
  }
}
</script>