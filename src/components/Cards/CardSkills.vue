<template>
    <div class="containerSkills">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
        <div class="cardSkills">
          <p class="textSkills">Frontend</p>
          <img src="../../assets/examples/frontend.png" alt="Avatar" class="pictureSkillsIcon">
          <img src="../../assets/examples/javascript.png" alt="Avatar" class="pictureSkills">
          <img src="../../assets/examples/vue.png" alt="Avatar" class="pictureSkills">
          <img src="../../assets/examples/css.png" alt="Avatar" class="pictureSkills">
          <img src="../../assets/examples/html.png" alt="Avatar" class="pictureSkills">
          <img src="../../assets/examples/react.png" alt="Avatar" class="pictureSkills">
          <img src="../../assets/examples/ionic.png" alt="Avatar" class="pictureSkills">
          <img src="../../assets/examples/ruby.png" alt="Avatar" class="pictureSkills">
          <img src="../../assets/examples/nodejs.png" alt="Avatar" class="pictureSkills">   
        </div>
        <div class="cardSkills">
            <p class="textSkills">Backend</p>
            <img src="../../assets/examples/backend.png" alt="Avatar" class="pictureSkillsIcon">
            <img src="../../assets/examples/python.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/java.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/nodejs.png" alt="Avatar" class="pictureSkills">
        </div>
        <div class="cardSkills">
            <p class="textSkills">Data Science</p>
            <img src="../../assets/examples/datascience.png" alt="Avatar" class="pictureSkillsIcon">
            <img src="../../assets/examples/R.png" alt="Avatar" class="pictureSkills">
        </div>
        <div class="cardSkills">
            <p class="textSkills">Database</p>
            <img src="../../assets/examples/database.png" alt="Avatar" class="pictureSkillsIcon">
            <img src="../../assets/examples/mongo.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/postgresql.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/oracle.png" alt="Avatar" class="pictureSkills">
        </div>
        <div class="cardSkills">
            <p class="textSkills">IDE's</p>
            <img src="../../assets/examples/ides.png" alt="Avatar" class="pictureSkillsIcon">
            <img src="../../assets/examples/Eclipse.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/vscode.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/rstudio.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/geany.png" alt="Avatar" class="pictureSkills"> 
        </div>
    </div>
</template>

<style>

.textSkills {
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
  color:  #FFD700;
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 30px;
  line-height: 1.8;
}
.containerSkills {
  width: 1200px;
  height: 600px;
  border-radius: 8px;
  columns: 5;
  background-color: #1C1C1C;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}
.cardSkills {
  width: 200px;
  height: 450px;
  box-shadow: 3px 0px #696969;
  border-radius: 8px;
  background-color: #1C1C1C;
  margin-top: -30px;
  margin-left: auto;
  margin-right: auto;
}
.pictureSkills {
  width: 50px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
} 
.pictureSkillsIcon {
  width: 150px;
  margin-top: -20px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>

<script>
export default {
    name: 'CardSkills'
  }
</script>