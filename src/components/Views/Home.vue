<template>
  <body>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="button">
      <Button/>
    </div>
    <Card/> 
  </body>
</template>

<style>

@media screen and (max-width: 2050px) {
  body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  }
  .button {
    transform: translate(30%, 50%);
  }
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