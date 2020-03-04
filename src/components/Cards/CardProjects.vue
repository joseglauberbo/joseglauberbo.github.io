<template >
    <div class="containerProjects">
        <button onclick="window.location.href='http://www.computacao.ufcg.edu.br/petcomputacao'" class="cardProject">
            <img src="../../assets/examples/PETcomputacao.png" class="pictureProjects">
                <p class="textCards"> 
                    I was part of the tutorial education program 
                    of the Federal University of Campina Grande during my gradutation. 
                    This project is focused in three main activities: research, 
                    teaching and extension. There were monitoring and support activities 
                    for undergraduate students and computational thinking activities with the population.
                </p>
        </button>
        <button onclick="window.location.href='https://github.com/joseglauberbo/my_portfolio'" class="cardProject">
            <img src="../../assets/examples/portfolio.png" class="pictureProjects">
                <p class="textCards"> 
                    This is my portfolio that contains informations about me,
                     my skills, projects and contact.
                </p>
        </button>
        <button onclick="window.location.href='https://drive.google.com/a/ccc.ufcg.edu.br/file/d/13zorW1OLPOylitS3mvyUKHnh8-R9DqTI/view?usp=drive_open'" class="cardProject">
            <img src="../../assets/examples/clusters.png" class="pictureProjects">
                 <p class="textCards"> 
                    This repository is about machine learning.
                    The main focus is clustering some data
                    to get informations about patterns.
                 </p> 
        </button>
        <button onclick="window.location.href='https://whataboutthisdata.herokuapp.com/'" class="cardProject">
            <img src="../../assets/examples/data.png" class="pictureProjects">
                 <p class="textCards"> 
                    This website has focus in show you better visualizations about some data that are open to public. There are informations about music, politic, etc.
                 </p> 
        </button>
    </div> 
</template>

<style>

  .containerProjects {
    width: 1200px;
    height: 600px;
    border-radius: 8px;
    columns: 4;
    background-color: #1C1C1C;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
  .cardProject {
    height: 420px;
    width: 280;
    box-shadow: 3px 2px #696969;
    border-radius: 8px;
    background-color: #1C1C1C;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .pictureProjects {
    width: 200px;
    border-radius: 20px;
    background-color: #1C1C1C;
  }
  .textCards {
    text-align: justify;
    text-indent: 50px;
    color:  #FFD700;
    text-shadow: 2px 1px #696969;
    font-family: 'Indie Flower', cursive;
    font-style: oblique;
    font-size: 18px;
    line-height: 1.2;
  }
</style>

<script>
    export default {
    name: 'CardProjects'
  }
</script>
