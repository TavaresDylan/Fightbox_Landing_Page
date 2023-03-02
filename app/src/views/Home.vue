<template>
  <v-container fluid id="container">
    <v-container class="container1">
      <img class="my-8" src="../assets/Fichier_18.svg" />
      <h2>
        L'abonnement ultime pour te motiver et t'aider dans ta pratique de sport
        de combat
      </h2>
      <div class="d-flex justify-end my-4">
        <v-btn border color="primary" size="x-large" variant="flat"
          >Découvrir l'abonnement
          <v-icon end size="x-large" icon="mdi-chevron-right"></v-icon
        ></v-btn>
      </div>
      <!-- <img class="img1" src="../assets/Fichier 12.svg" alt="" />
      <img class="img1-bis" src="../assets/Fichier 12 copy.svg" alt="" />
      <img class="img2" src="../assets/Fichier 5.svg" alt="" />
      <img class="img2-bis" src="../assets/Fichier 5 copy.svg" alt="" /> -->
    </v-container>

    <hr class="my-4" />
    <SubscriptionPricing></SubscriptionPricing>
    <hr class="my-4" />
    <Introducing reversed=false > </Introducing>

  </v-container>
</template>

<script setup>
import Introducing from "../components/Introducing.vue";
import SubscriptionPricing from "../components/SubscriptionPricing.vue"
</script>

<style scoped>
.container1 {
  height: 100vh;
  z-index: 1000;
}
.img1 {
  position: absolute;
  top: 300px;
  left: 100px;
  width: 30%;
  z-index: 2;
  transform: rotate(-30deg);
}

.img1-bis {
  position: absolute;
  top: 310px;
  left: 90px;
  width: 30%;
  z-index: 1;
  transform: rotate(-30deg);
}

.img2 {
  position: absolute;
  overflow: hidden;
  top: 90px;
  right: -170px;
  width: 30%;
  z-index: 2;
  transform: rotate(-120deg);
}

.img2-bis {
  position: absolute;
  overflow: hidden;
  top: 100px;
  right: -160px;
  width: 30%;
  z-index: 1;
  transform: rotate(-120deg);
}

img {
  position: relative;
  z-index: 1000;
}

h2 {
  position: relative;
  z-index: 1000;
  background-color: #ffe2cb;
}
button {
  position: relative;
  z-index: 1000;
  font-weight: bold;
}
</style>
