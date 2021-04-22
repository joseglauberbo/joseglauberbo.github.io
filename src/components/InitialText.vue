<template>
  <div class="text">
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
      <p id="myclass"> Hi, my name is José Glauber. I'm twenty-three years old and i'm computer scientist
                    graduated by Federal University of Campina Grande. There are a lot of things that
                    i like to do, like read, sing, listen to music, meet people and code. I'm very
                    curious about frontend development and design code. 
      </p>
  </div>
</template>

<script>
  export default {
    name: 'InitialText',
    methods: {
      typeWriter(element) {
        const textArray = element.innerHTML.split('');
        element.innerHTML = '';
        textArray.forEach((letter, i) => {
          setTimeout(() => element.innerHTML += letter, 75 * i);
        });
      }
    },
    mounted: function() {
      const title = document.getElementById('myclass');
      this.typeWriter(title);
    }
  }
</script>

<style>
.text {
  text-align: justify;
  text-indent: 50px;
  color:  #FFD700;
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 28px;
  line-height: 1.2;
}
</style>