<template>
     <div class="border">
      <router-link to="/"><md-button class="text-button">About</md-button></router-link>
      <router-link to="/skills"><md-button class="text-button"> Skills</md-button></router-link>
      <router-link to="/projects"><md-button class="text-button"> Projects</md-button></router-link>
      <router-link to="/contacts"><md-button class="text-button"> Contacts</md-button></router-link>
     </div>
</template>

<style>

  .border {
    border-bottom-style: dotted;
    width: 37%;
    border-width: 2px 10px 4px 20px;
    border-color: #A4A4A4;
  }
  
  .text-button {
    color: #2F4F4F;
    text-shadow: 3px 2px #A4A4A4;
    font-family: monaco;
    font-style: oblique;
    font-size: 20px;
  }
</style>

<script>
  export default {
    name: 'Button'
  }
</script>