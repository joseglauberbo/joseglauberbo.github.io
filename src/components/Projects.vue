<template>
  <body>
  <div >
    <div class="button">
      <Button/>
    </div>
  </div>
  </body>
</template>


<style lang="scss" scoped>
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

import Button from './Button.vue'

export default {
  name: 'projects',
  components: {
    Button,
  }
}

</script>