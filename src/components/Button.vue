<template>
     <div class="border">
     <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
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
    color: #FFD700;
    text-shadow: 2px 1px #696969;
    font-family: 'Indie Flower', cursive;
    font-style: oblique;
    font-size: 20px;
  }
</style>

<script>
  export default {
    name: 'Button'
  }
</script>