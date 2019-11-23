<template>
  <div id="app">
    <Toolbar/>
    <Card/>
  </div>
</template>

<script>

import Toolbar from './components/Toolbar.vue'
import Card from './components/Card.vue'


export default {
  name: 'app',
  components: {
    Toolbar,
    Card,
  }
}
</script>

