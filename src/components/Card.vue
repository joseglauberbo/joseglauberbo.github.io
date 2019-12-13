<template>
  <div class="card">
    <div>
     <img src="../assets/examples/glauber2.png" alt="Avatar" class="picture">
    </div>
    <div class="text">
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
      <p> Hi, my name is José Glauber. I'm twenty-two years old and i'm computer scientist
                    graduated by Federal University of Campina Grande. There are a lot of things that
                    i like to do, like read, sing, listen to music, meet people and code. I'm very
                    curious about frontend development and design code. 
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card'
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
  transform: translate(-20%,-65%);
  border-radius: 8px;
  columns: 2;
  background-color: #1C1C1C;
}
.text {
  text-align: justify;
  text-indent: 50px;
  color:  #FFD700;
  transform: translate(-15%,18%);
  text-shadow: 3px 2px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 28px;
  line-height: 1.2;
}

</style>