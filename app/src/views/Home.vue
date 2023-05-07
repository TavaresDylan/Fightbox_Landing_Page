<template>
  <v-container fluid id="container">
    <v-container class="container1">
      <img class="my-8" src="../assets/Fichier_18.svg" />
      <h2 class="bg-transparent">
        L'abonnement ultime pour te motiver et t'aider dans ta pratique de sport
        de combat
      </h2>
      <div class="d-flex justify-end my-4">
        <v-btn
          color="primary"
          size="x-large"
          class="rounded-xl"
          variant="elevated"
          ><font-awesome-icon
            class="mr-2"
            size="xl"
            icon="fa-solid fa-arrow-right"
          />
          J'achète</v-btn
        >
      </div>
      <img class="img1" src="../assets/Fichier 12.svg" alt="" />
      <img class="img1-bis" src="../assets/Fichier 12 copy.svg" alt="" />
      <img class="img2" src="../assets/Fichier 5.svg" alt="" />
      <img class="img2-bis" src="../assets/Fichier 5 copy.svg" alt="" />
      <img class="img3" src="../assets/Fichier 2.svg" alt="" />
      <img class="img3-bis" src="../assets/Fichier 2 copy.svg" alt="" />
      <div class="banner-container"></div>
    </v-container>

    <hr class="my-4" />
    <SubscriptionPricing></SubscriptionPricing>
    <hr class="my-4" />
    <Introducing reversed="false"> </Introducing>
  </v-container>
  <Faq></Faq>
</template>

<script lang="ts" setup>
import Introducing from "../components/Introducing.vue";
import SubscriptionPricing from "../components/SubscriptionPricing.vue";
import Faq from "../components/Faq.vue";
</script>

<style scoped>
.container1 {
  min-height: 90vh;
  z-index: 1000;
  position: relative;
}
.img1 {
  position: absolute;
  top: 43.5vh;
  left: 6.7vw;
  width: 22rem;
  z-index: 2;
  transform: rotate(-55deg);
}

.img1-bis {
  position: absolute;
  top: 44.8vh;
  left: 6vw;
  width: 22rem;
  z-index: 1;
  transform: rotate(-55deg);
}

.img2 {
  position: absolute;
  overflow: hidden;
  top: 90px;
  right: -15vw;
  width: 18vw;
  z-index: 2;
  transform: rotate(-120deg);
}

.img2-bis {
  position: absolute;
  overflow: hidden;
  top: 100px;
  right: -16vw;
  width: 18vw;
  z-index: 1;
  transform: rotate(-120deg);
}

.img3 {
  position: absolute;
  overflow: hidden;
  top: 0vh;
  left: -15vw;
  width: 9vw;
  z-index: 2;
  transform: rotate(48deg);
}

.img3-bis {
  position: absolute;
  overflow: hidden;
  top: 1vh;
  left: -14vw;
  width: 9vw;
  z-index: 1;
  transform: rotate(48deg);
}

img {
  position: relative;
  z-index: 1000;
}

h2 {
  position: relative;
  z-index: 1000;
  background-color: #ffe2cb;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #ffe2cb;
  text-shadow: 0px 0px 8px #ffe2cb;
  font-weight: black !important;
}
button {
  border: 2px solid black !important;
  position: relative;
  z-index: 1000;
  font-weight: bold;
  font-size: xx-large;
}
#container {
  overflow: hidden;
}

.banner-container {
  width: 200vw;
  height: 30vh;
  position: absolute;
  bottom: 0;
  left: -15rem;
  background: url("../assets/Fichier 13.svg");
}

/* XS (mobile phone) */
@media screen and (max-width: 600px) {
  .img3 {
    position: absolute;
    overflow: hidden;
    top: -15px;
    left: 0px;
    width: 9vw;
    z-index: 2;
    transform: rotate(48deg);
  }

  .img3-bis {
    position: absolute;
    overflow: hidden;
    top: -20px;
    left: 0px;
    width: 9vw;
    z-index: 1;
    transform: rotate(48deg);
  }

  .img1 {
  position: absolute;
  top: 43.5vh;
  left: 6.7vw;
  width: 50vw;
  z-index: 2;
  transform: rotate(-55deg);
}

.img1-bis {
  position: absolute;
  top: 44.8vh;
  left: 6vw;
  width: 50vw;
  z-index: 1;
  transform: rotate(-55deg);
}

.img2 {
  position: absolute;
  overflow: hidden;
  top: 28vh;
  right: -8vw;
  width: 24vw;
  z-index: 2;
  transform: rotate(-120deg);
}

.img2-bis {
  position: absolute;
  overflow: hidden;
  top: 28vh;
  right: -9vw;
  width: 24vw;
  z-index: 1;
  transform: rotate(-120deg);
}

}
</style>
