<template>
    <div class="containerContacts">
        <button onclick="window.location.href='https://www.linkedin.com/in/jos%C3%A9-glauber-braz-de-oliveira-8943b0152/'" class="cardContactLinkedin">
            <img src="../../assets/examples/linkedin.png" class="pictureContacts">
        </button>
        <button onclick="window.location.href='https://github.com/joseglauberbo'" class="cardContactGithub">
            <img src="../../assets/examples/github-logo.png" class="pictureContacts">
        </button>
        <button class="cardContactEmailandWhatsApp">
            <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
            <img src="../../assets/examples/email.png" class="pictureContactsEmail">
            <p class="text1"> jose.oliveira@ccc.ufcg.edu.br </p>
            <img src="../../assets/examples/whatsapp.png" class="pictureContactsWhatsApp">
            <p class="text1"> +55 (83) 98718-6588 </p>
        </button>
    </div>
</template>

<style>
.containerContacts {
  width: 400px;
  height: 400px;
  margin-top: 30px;
  margin-left: 470px;
  margin-right: auto;
}
.cardContactLinkedin {
  padding: 20px 10px;
  width: 340px;
  height: 100px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  border-radius: 8px;
  background-color: #363636;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.cardContactGithub {
  padding: 20px 10px;
  width: 340px;
  height: 100px;
  margin: 350px;
  box-shadow: 3px 2px #696969;
  border-radius: 8px;
  background-color: #363636;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.cardContactEmailandWhatsApp {
  padding: 20px 10px;
  width: 340px;
  height: 200px;
  box-shadow: 3px 2px #696969;
  border-radius: 8px;
  background-color: #363636;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.pictureContacts {
  width: 150px;
  border-radius: 8px;
}
.pictureContactsEmail {
  width: 40px;
  border-radius: 8px;
}
.pictureContactsWhatsApp {
  width: 35px;
  border-radius: 8px;
}
.text1 {
  text-align: justify;
  text-indent: 50px;
  color:  #FFD700;
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 20px;
  line-height: 1.2;
}

</style>

<script>
  export default {
    name: 'CardContacts'
  }
</script>