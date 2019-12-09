<template>
    <div>
        <button type="submit" class="cardSkillsFrontend">
             <img src="../assets/examples/frontend.png" alt="Avatar" class="picture">
        </button>
        <button class="cardSkillsBackend">
            <img src="../assets/examples/backend.png" alt="Avatar" class="picture">
        </button>
        <button class="cardSkillsDataScience">
            <img src="../assets/examples/datascience.png" alt="Avatar" class="picture">
        </button>
        <button class="cardSkillsDB">
            <img src="../assets/examples/database.png" alt="Avatar" class="picture">
        </button>
        <button class="cardSkillsIDE">
            <img src="../assets/examples/ides.png" alt="Avatar" class="picture">
        </button>
    </div>
</template>

<style >

.picture {
  width: 210px;
  border-radius: 8px;
} 

.cardSkillsFrontend {
  padding: 20px 10px;
  width: 240px;
  margin: 350px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transform: translate(-50%,-110%);
  border-radius: 8px;
  background-color: #FFC0CB;

  transition: width 2s;
}

.cardSkillsBackend {
  padding: 20px 10px;
  width: 240px;
  margin: 350px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transform: translate(185%, -480% );
  border-radius: 8px;
  background-color: #FFC0CB;
}

.cardSkillsDataScience {
  padding: 20px 10px;
  width: 240px;
  margin: 350px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transform: translate(5%,-730%);
  border-radius: 8px;
  background-color: #FFC0CB;
}

.cardSkillsDB {
  padding: 20px 10px;
  width: 240px;
  margin: 350px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transform: translate(130%,-1100%);
  border-radius: 8px;
  background-color: #FFC0CB;
}

.cardSkillsIDE {
  padding: 20px 10px;
  width: 240px;
  margin: 350px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transform: translate(67%,-1587%);
  border-radius: 8px;
  background-color: #FFC0CB;
}

</style>

<script>

export default {
    name: 'CardSkills'
  }

</script>

