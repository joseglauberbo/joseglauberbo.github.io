<template>
  <body>
  <div id="app">
    <Toolbar/>
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

export default {
  name: 'skills',
  components: {
    Toolbar
  }
}

</script>