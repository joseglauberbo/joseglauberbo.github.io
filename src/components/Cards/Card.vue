<template>
  <div class="card">
    <div>
     <img src="../../assets/examples/glauber2.png" alt="Avatar" class="picture">
    </div>
    <InitialText class="myText"> </InitialText>
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
  width: 300px;
  border-radius: 20px;
  transform: translate(8%, 1%);
} 
.card {
  padding: 20px 10px;
  width: 850px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(-65%,-65%);
  border-radius: 8px;
  columns: 2;
  background-color: #1C1C1C;
}
.myText {
  transform: translate(-15%,18%);
}


</style>