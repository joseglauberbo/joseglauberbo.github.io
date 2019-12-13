<template>
  <div div class="home">
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
  .home {
  padding: 0;
  margin: 0;
  width: 100%;
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