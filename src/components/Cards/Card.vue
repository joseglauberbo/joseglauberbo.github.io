<template>
  <div class="card">
    <img src="../../assets/examples/glauber2.png" alt="Avatar" class="picture">
    <InitialText class="initialText"> </InitialText>
  </div>
</template>

<script>

  import InitialText from '../InitialText'

  export default {
    name: 'Card',
    components: {
      InitialText
    }
  }
</script>

<style>

.picture {
  width: 280px;
  border-radius: 20px;
  margin-left: 60px;
}
.initialText {
  text-align: justify;
  margin-right: 60px;
}
.card {
  padding: 20px 10px;
  width: 850px;
  height: 450px;
  box-shadow: 3px 2px #696969;
  border-radius: 8px;
  columns: 2;
  background-color: #1C1C1C;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

</style>