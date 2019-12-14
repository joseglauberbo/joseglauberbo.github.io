<template>
  <div class="projects">
    <div class="button">
      <Button/>
    </div>
    <CardProjects/>
  </div>
</template>


<style>
  .button {
    transform: translate(30%, 50%);
  }
  .projects {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #1C1C1C;
  }
</style>

<script>
import Button from '../Button.vue'
import CardProjects from '../Cards/CardProjects.vue'

export default {
  name: 'projects',
  components: {
    Button,
    CardProjects
  }
}
</script>