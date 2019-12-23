<template>
  <body class="projects">
    <div>
      <Button/>
      <div>
        <CardProjects/>
      </div>
    </div>
    </body>
</template>


<style>
  .projects{
    transform: translate(30%, 1%);
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