<template>
    <div class="container">
        <div class="cardSkillsFrontend">
             <img src="../assets/examples/frontend.png" alt="Avatar" class="pictureSkills">
        </div>
        <div class="cardSkillsBackend">
            <img src="../assets/examples/backend.png" alt="Avatar" class="pictureSkills">
        </div>
        <div class="cardSkillsDataScience">
            <img src="../assets/examples/datascience.png" alt="Avatar" class="pictureSkills">
        </div>
        <div class="cardSkillsDB">
            <img src="../assets/examples/database.png" alt="Avatar" class="pictureSkills">
        </div>
        <div class="cardSkillsIDE">
            <img src="../assets/examples/ides.png" alt="Avatar" class="pictureSkills">
        </div>
    </div>
</template>

<style>

.container {
  transform: translate(-140%, -1%);
  width: 100px;
}
.pictureSkills {
  width: 210px;
  border-radius: 8px;
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