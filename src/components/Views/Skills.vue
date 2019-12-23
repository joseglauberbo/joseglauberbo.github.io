<template>
  <body class="skills">
    <div>
      <Button/>
      <div>
        <CardSkills/>
      </div>
    </div>
  </body>
</template>

<style>
  .skills {
    transform: translate(30%, 1%);
  }
</style>

<script>
import Button from '../Button.vue'
import CardSkills from '../Cards/CardSkills.vue'

export default {
  name: 'skills',
  components: {
    Button,
    CardSkills
  }
}
</script>