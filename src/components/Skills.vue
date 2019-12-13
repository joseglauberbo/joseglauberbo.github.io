<template>
  <div>
    <div class="button">
      <Button/>
    </div>
    <CardSkills/>
  </div>
</template>

<style>
  .button {
    transform: translate(30%, 50%);
  }
  body {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #1C1C1C;
  }

</style>

<script>
import Button from './Button.vue'
import CardSkills from './CardSkills.vue'
export default {
  name: 'skills',
  components: {
    Button,
    CardSkills
  }
}
</script>