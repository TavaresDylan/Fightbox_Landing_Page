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
    </v-container>

    <hr class="my-4" />
    <SubscriptionPricing></SubscriptionPricing>
    <hr class="my-4" />
    <Introducing reversed="false"> </Introducing>
  </v-container>
</template>

<script lang="ts" setup>
import Introducing from "../components/Introducing.vue";
import SubscriptionPricing from "../components/SubscriptionPricing.vue";
</script>

<style scoped>
.container1 {
  height: 100vh;
  z-index: 1000;
}
.img1 {
  position: absolute;
  top: 44vh;
  left: 3.4vw;
  width: 22rem;
  z-index: 2;
  transform: rotate(-30deg);
}

.img1-bis {
  position: absolute;
  top: 43vh;
  left: 2.4vw;
  width: 22rem;
  z-index: 1;
  transform: rotate(-30deg);
}

.img2 {
  position: absolute;
  overflow: hidden;
  top: 90px;
  right: -110px;
  width: 16rem;
  z-index: 2;
  transform: rotate(-120deg);
}

.img2-bis {
  position: absolute;
  overflow: hidden;
  top: 100px;
  right: -100px;
  width: 16rem;
  z-index: 1;
  transform: rotate(-120deg);
}

.img3 {
  position: absolute;
  overflow: hidden;
  top: 90px;
  left: -80px;
  width: 8rem;
  z-index: 2;
  transform: rotate(48deg);
}

.img3-bis {
  position: absolute;
  overflow: hidden;
  top: 100px;
  left: -70px;
  width: 8rem;
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
  -webkit-text-stroke-color: #FFE2CB;
  text-shadow: 0px 0px 8px #FFE2CB;
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
  position: relative;
  overflow: hidden;
}
</style>
