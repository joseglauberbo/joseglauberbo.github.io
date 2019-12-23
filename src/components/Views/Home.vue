<template>
  <body class="home">
    <div>
      <Button/>
      <div>
        <Card/> 
      </div>
    </div>
  </body>
</template>

<style>

  .home {
    transform: translate(30%, 4%);
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