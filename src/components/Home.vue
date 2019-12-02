
<template>
<body>
  <div id="app">
    <div class="button">
      <Button/>
    </div>
    <Card/>
  </div>
  </body>
</template>


<style lang="scss" scoped>
  
  .button {
    transform: translate(30%, 50%);
  }
  .border {
    border-width:8px;  
    border-bottom-style:dotted;
    transform: translate(-200%, 5%);
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

