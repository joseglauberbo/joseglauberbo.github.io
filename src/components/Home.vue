
<template>
<body>
  <div id="app">
    <Toolbar/>
    <Card/>
  </div>
  </body>
</template>


<style lang="scss" scoped>
  body {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  }
  body {
  background-color: #F5F2B8;
  }
</style>

<script>

import Toolbar from './Toolbar.vue'
import Card from './Card.vue'

export default {
  name: 'home',
  components: {
    Toolbar,
    Card
  }
}
</script>

