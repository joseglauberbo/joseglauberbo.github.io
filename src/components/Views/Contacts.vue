<template>
  <body>
    <div>
      <Button class="buttons"> </Button>
      <CardContacts/>
      </div>
    </body>
</template>

<style>
  .buttons {
   max-width:800px;
   max-height:500px;
   display: block;
   margin-left: auto;
   margin-right: auto;
   margin-top: 40px;
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

import CardContacts from '../Cards/CardContacts'
import Button from '../Button'

export default {
  name: 'contacts',
  components: {
    CardContacts,
    Button
  }
}
</script>