<template>
    <div>
        <button onclick="window.location.href='https://www.linkedin.com/in/jos%C3%A9-glauber-braz-de-oliveira-8943b0152/'" class="cardContactLinkedin">
            <img src="../assets/examples/linkedin.png" class="pictureContacts">
        </button>
        <button onclick="window.location.href='https://github.com/joseglauberbo'" class="cardContactGithub">
            <img src="../assets/examples/github-logo.png" class="pictureContacts">
        </button>
        <div class="cardContactEmailandWhatsApp">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
          <div>
            <img src="../assets/examples/email.png" class="pictureContactsEmail">
            <p class="text1"> jose.oliveira@ccc.ufcg.edu.br </p>
          </div>
          <div>
            <img src="../assets/examples/whatsapp.png" class="pictureContactsWhatsApp">
            <p class="text2"> +55 (83) 98718-6588 </p>
          </div>
        </div>
    </div>
</template>

<style>

.cardContactLinkedin {
  padding: 20px 10px;
  width: 340px;
  height: 100px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(30%,-290%);
  border-radius: 8px;
  background-color: #363636;
}

.cardContactGithub {
  padding: 20px 10px;
  width: 340px;
  height: 100px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(30%,-970%);
  border-radius: 8px;
  background-color: #363636;
}

.cardContactEmailandWhatsApp {
  padding: 20px 10px;
  width: 340px;
  height: 100px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  transform: translate(30%,-1650%);
  border-radius: 8px;
  background-color: #363636;
}

.pictureContacts {
  width: 150px;
  border-radius: 8px;
}

.pictureContactsEmail {
  width: 40px;
  border-radius: 8px;
  transform: translate(35%,-30%);
}

.pictureContactsWhatsApp {
  width: 35px;
  border-radius: 8px;
  transform: translate(45%, -165%);
}

.text1 {
  text-align: justify;
  text-indent: 50px;
  color:  #FFD700;
  transform: translate(7%,-230%);
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 20px;
  line-height: 1.2;
}

.text2 {
  text-align: justify;
  text-indent: 50px;
  color:  #FFD700;
  transform: translate(10%, -380%);
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 25px;
  line-height: 1.2;
}


</style>

<script>

</script>