<template>
  <div id="app">
    <Toolbar/>
    <Card/>
  </div>
</template>

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

