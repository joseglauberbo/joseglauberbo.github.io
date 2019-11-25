<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">José Glauber</h3>
      <router-link to="/"><md-button> Home</md-button></router-link>
      <router-link to="/skills"><md-button> Skills</md-button></router-link>
      <router-link to="/projects"> <md-button class="md-primary">Projects</md-button></router-link>
      <router-link to="/contact"> <md-button class="md-primary">Contact</md-button></router-link>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
  .md-accent {
    background-color: #F9DAD0;
  }


</style>

<script>
export default {
  name: 'Toolbar'
}
</script>