<template class="containerPageSkills">
  <div>
    <div class="button">
      <Button/>
    </div>
    <CardContacts/>
    </div>
</template>

<style>

.containerPageSkills {
  
}
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

import Button from '../Button.vue'
import CardContacts from '../Cards/CardContacts.vue'

export default {
  name: 'contacts',
  components: {
    Button,
    CardContacts
  }
}
</script>