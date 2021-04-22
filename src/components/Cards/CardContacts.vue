<template>
    <div class="containerContacts">
        <button onclick="window.location.href='https://www.linkedin.com/in/jos%C3%A9-glauber-braz-de-oliveira-8943b0152/'" class="cardContact">
            <img src="../../assets/examples/linkedin.png" class="pictureContacts">
        </button>
        <button onclick="window.location.href='https://github.com/joseglauberbo'" class="cardContact">
            <img src="../../assets/examples/github-logo.png" class="pictureContacts">
        </button>
        <div class="cardContact"> 
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
            <img src="../../assets/examples/email.png" class="pictureContactsEmailandWhatsapp">
            <p class="text1"> jose.oliveira@ccc.ufcg.edu.br </p>
            <p class="text1"> joseglauber@copin.ufcg.edu.br </p>
        </div>
        <div class="cardContact">
          <img src="../../assets/examples/whatsapp.png" class="pictureContactsEmailandWhatsapp">
          <p class="text1"> +55 (83) 98718-6588 </p>
        </div>
    </div>
</template>

<style>

.containerContacts {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  background-color: #1C1C1C;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
.cardContact {
  width: 300px;
  height: 100px;
  margin: 10px;
  box-shadow: 3px 2px #696969;
  border-radius: 8px;
  background-color: #363636;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
.pictureContacts {
  width: 150px;
  border-radius: 8px;
}
.pictureContactsEmailandWhatsapp {
  margin-top: 10px;
  margin-left: 130px;
  margin-right: auto;
  width: 50px;
  border-radius: 8px;
}
.text1 {
  text-align: center;
  color:  #FFD700;
  text-shadow: 2px 1px #696969;
  font-family: 'Indie Flower', cursive;
  font-style: oblique;
  font-size: 15px;
  line-height: 0.5;
}

</style>

<script>
  export default {
    name: 'CardContacts'
  }
</script>