<template class="containerPage">
    <div class="container">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
        <div class="cardSkillsFrontend">
             <p class="textBackandFront">Frontend</p>
             <img src="../../assets/examples/frontend.png" alt="Avatar" class="pictureSkills">
             <img src="../../assets/examples/javascript.png" alt="Avatar" class="pictureSkillsJavaScript">
             <img src="../../assets/examples/vue.png" alt="Avatar" class="pictureSkillsVue">
             <img src="../../assets/examples/css.png" alt="Avatar" class="pictureSkillsCss">
             <img src="../../assets/examples/html.png" alt="Avatar" class="pictureSkillsHtml">
             <img src="../../assets/examples/react.png" alt="Avatar" class="pictureSkillsReact">
             <img src="../../assets/examples/ionic.png" alt="Avatar" class="pictureSkillsIonic">
             <img src="../../assets/examples/ruby.png" alt="Avatar" class="pictureSkillsRuby">
        </div>
        <div class="cardSkillsBackend">
            <p class="textBackandFront">Backend</p>
            <img src="../../assets/examples/backend.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/python.png" alt="Avatar" class="pictureSkillsPython">
            <img src="../../assets/examples/java.png" alt="Avatar" class="pictureSkillsJava">
        </div>
        <div class="cardSkillsDataScience">
            <p class="textDS">Data Science</p>
            <img src="../../assets/examples/datascience.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/R.png" alt="Avatar" class="pictureSkillsR">
        </div>
        <div class="cardSkillsDB">
            <p class="textDB">Database</p>
            <img src="../../assets/examples/database.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/mongo.png" alt="Avatar" class="pictureMongo">
            <img src="../../assets/examples/postgresql.png" alt="Avatar" class="picturePostgreSQL">
            <img src="../../assets/examples/oracle.png" alt="Avatar" class="pictureOracle">
        </div>
        <div class="cardSkillsIDE">
            <p class="textIDES">IDE's</p>
            <img src="../../assets/examples/ides.png" alt="Avatar" class="pictureSkills">
            <img src="../../assets/examples/Eclipse.png" alt="Avatar" class="pictureSkillsEclipse">
            <img src="../../assets/examples/vscode.png" alt="Avatar" class="pictureSkillsVSCode">
            <img src="../../assets/examples/rstudio.png" alt="Avatar" class="pictureSkillsRStudio">
            <img src="../../assets/examples/geany.png" alt="Avatar" class="pictureSkillsGeany">
        </div>
    </div>
</template>

<style>

.textBackandFront, .textDB, .textDS, .textIDES {
  text-align: justify;
  text-indent: 50px;
  color:  #FFD700;
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 28px;
  line-height: 1.2;
}
.textDS {
  transform: translate(-15%, 0%);
}
.textDB {
  transform: translate(-5%, 0%);
}
.textIDES {
  transform: translate(10%, 0%);
}
.container {
  transform: translate(-240%, -100%);
  width: 100px;
}
.containerPage {
  width: 60px;
  height: 60px;
}
.pictureSkills {
  width: 190px;
  border-radius: 8px;
  transform: translate(5%, 0%);
} 
.pictureSkillsPython, .pictureSkillsJava, .pictureSkillsVue, .pictureSkillsCss, 
.pictureSkillsHtml, .pictureSkillsReact, .pictureSkillsIonic, .pictureSkillsR,
.pictureSkillsEclipse, .pictureSkillsVSCode, .pictureSkillsRStudio, .pictureSkillsGeany,
.pictureMongo, .picturePostgreSQL, .pictureOracle, .pictureSkillsRuby {
  width: 50px;
  background-color: #1C1C1C;
}
.pictureSkillsPython {
  transform: translate(90%, 50%); 
}
.pictureSkillsJava {
  transform: translate(110%, 80%);
}
.pictureSkillsJavaScript {
  width: 100px;
  transform: translate(-30%, 40%);
}
.pictureSkillsVue {
  transform: translate(-40%, 200%);
}
.pictureSkillsCss {
  transform: translate(-150%, 50%);
}
.pictureSkillsHtml {
  transform: translate(40%, 100%);
}
.pictureSkillsReact {
  width:60px;
  transform: translate(150%, 200%);
}
.pictureSkillsIonic {
  transform: translate(100%, 60%);
}
.pictureSkillsR {
  transform: translate(70%, 90%);
}
.pictureSkillsEclipse {
  transform: translate(50%, 50%);
}
.pictureSkillsVSCode {
  transform: translate(150%, 20%);
}
.pictureSkillsRStudio {
  width: 110px;
  transform: translate(0%, 250%);
}
.pictureSkillsGeany {
  transform: translate(0%, 100%);
}
.pictureMongo {
  width: 70px;
  transform: translate(0%, 100%);
}
.picturePostgreSQL {
  transform: translate(0%, 50%);
}
.pictureOracle {
  width: 90px;
  transform: translate(0%, 100%);
}
.pictureSkillsRuby {
  width: 80px;
  transform: translate(170%, -240%);
}

.cardSkillsFrontend {
  padding: 20px 10px;
  width: 240px;
  height: 500px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(-80%,-50%);
  border-radius: 8px;
  background-color: #1C1C1C;
}
.cardSkillsBackend {
  padding: 20px 10px;
  width: 240px;
  height: 500px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(25%, -220% );
  border-radius: 8px;
  background-color: #1C1C1C;
}
.cardSkillsDataScience {
  padding: 20px 10px;
  width: 240px;
  height: 500px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(130%, -390% );
  border-radius: 8px;
  background-color: #1C1C1C;
}
.cardSkillsDB {
  padding: 20px 10px;
  width: 240px;
  height: 500px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(235%, -560%);
  border-radius: 8px;
  background-color: #1C1C1C;
}
.cardSkillsIDE {
  padding: 20px 10px;
  width: 240px;
  height: 500px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(340%, -730%);
  border-radius: 8px;
  background-color: #1C1C1C;
}
</style>

<script>
export default {
    name: 'CardSkills'
  }
</script>