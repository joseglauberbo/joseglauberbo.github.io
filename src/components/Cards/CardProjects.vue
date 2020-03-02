<template >
    <div class="container2">
        <div>
            <button onclick="window.location.href='https://www.dsc.ufcg.edu.br/~pet/'" class="cardProjectPETComputacao">
                <img src="../../assets/examples/PETcomputacao.png" class="pictureProjects">
                <p class="textPET"> 
                    I was part of the tutorial education program 
                    of the Federal University of Campina Grande during my gradutation. 
                    This project is focused in three main activities: research, 
                    teaching and extension. There were monitoring and support activities 
                    for undergraduate students and computational thinking activities with the population.
                </p>
            </button>
        </div>
        <div>
            <button onclick="window.location.href='https://github.com/joseglauberbo/my_portfolio'" class="cardProjectPortfolio">
                <img src="../../assets/examples/portfolio.png" class="pictureProjects">
                <p class="textPET"> 
                    This is my portfolio that contains informations about me,
                     my skills, projects and contact.
                </p>
            </button>
        </div>
        <div>
            <button onclick="window.location.href='https://drive.google.com/a/ccc.ufcg.edu.br/file/d/13zorW1OLPOylitS3mvyUKHnh8-R9DqTI/view?usp=drive_open'" class="cardProjectMachineLearning">
                 <img src="../../assets/examples/clusters.png" class="pictureProjects">
                 <p class="textPET"> 
                    This repository is about machine learning.
                    The main focus is clustering some data
                    to get informations about patterns.
                 </p> 
                  <button class="buttonArticle">
                    <p class="textArticle">Article</p>
                  </button>
            </button>
           
        </div>
    </div>
</template>

<style>

  .container2 {
    width: 20px;
    transform: translate(-1600%, 0%);
  }
  .cardProjectPETComputacao {
  padding: 20px 10px;
  width: 300px;
  height: 450px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(-90%,-60%);
  border-radius: 8px;
  background-color: #1C1C1C;
  }
  .cardProjectPortfolio {
  padding: 20px 10px;
  width: 300px;
  height: 450px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(25%,-316%);
  border-radius: 8px;
  background-color: #1C1C1C;
  }
  .cardProjectMachineLearning {
  padding: 20px 10px;
  width: 300px;
  height: 450px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(140%,-572%);
  border-radius: 8px;
  background-color: #1C1C1C;
  }
  .pictureProjects {
  width: 250px;
  border-radius: 20px;
  transform: translate(0%, -5%);
  background-color: #1C1C1C;
  }
  .textPET {
  text-align: justify;
  text-indent: 50px;
  color:  #FFD700;
  transform: translate(0%, -10%);
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 18px;
  line-height: 1.2;
  }
  .buttonArticle {
  padding: 20px 10px;
  width: 80px;
  height: 10px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  border-radius: 8px;
  transform: translate(-250%,-802%);  
  background-color: #1C1C1C;
  }
  .textArticle {
  text-align: justify;
  text-indent: 50px;
  color:  #FFD700;
  transform: translate(-90%, -120%);
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 20px;
  line-height: 1.2;
  }
</style>

<script>
    export default {
    name: 'CardProjects'
  }
</script>
