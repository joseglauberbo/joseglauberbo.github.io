<template>

  <div class="card">
    <div class="picture">
     <img src="../assets/examples/joseglauber.png" alt="Avatar" class="picture">
    </div>
    <div class="text">
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
  width: 350px;
  height: 365px;
  border-radius: 20px;
  transform: translate(2%, 1%);
} 

.card {
  padding: 20px 10px;
  width: 850px;
  margin: 350px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transform: translate(-20%,-70%);
  border-radius: 8px;
  columns: 2;
  background-color: #FFC0CB;
}

.text {
  text-align: justify;
  text-indent: 50px;
  color: #2F4F4F;
  transform: translate(-8%,25%);
  text-shadow: 3px 2px #A4A4A4;
  font-family: monaco;
  font-style: oblique;
  font-size: 25px;
  line-height: 1.2;
}

</style>