
<template>
<body>
    <div class="button">
      <Button/>
    </div>
    <Card/>
  </body>
</template>


<style>

  .button {
    transform: translate(30%, 50%);
  }
  body {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  }
  body {
  background-color: #FFB6C1;
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