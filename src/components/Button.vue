<template>
  <div>
    <div>
      <router-link to="/"><md-button class="text-button">About</md-button></router-link>
      <router-link to="/skills"><md-button class="text-button"> Skills</md-button></router-link>
      <router-link to="/projects"><md-button class="text-button"> Projects</md-button></router-link>
      <router-link to="/contacts"><md-button class="text-button"> Contacts</md-button></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .text-button {
    color: #2F4F4F;
    text-shadow: 3px 2px #BDB76B;
    font-family: monaco;
    font-style: oblique;
    font-size: 20px;
    line-height: 1.2;
  }

  .hidden {
    border-style: hidden;
  }
</style>

<script>
  export default {
    name: 'Button'
  }
</script>