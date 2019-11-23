<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">José Glauber</h3>
      <md-button>Skills</md-button>
      <md-button class="md-primary">Projects</md-button>
      <md-button class="md-primary">Contact</md-button>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
</style>

<script>
export default {
  name: 'Toolbar'
}
</script>