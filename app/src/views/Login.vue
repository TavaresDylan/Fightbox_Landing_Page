<template>
  <v-container>
    <h1 class="mt-4">Connexion</h1>
    <v-row id="form-container">
      <div id="bar"></div>
      <v-spacer></v-spacer>
      <v-col cols="10" md="6" lg="4">
        <v-form id="form">
          <v-card
            id="card"
            outlined
            class="px-4 py-1 border border-dark rounded rounded-lg"
          >
            <v-label color="black">E-mail :</v-label>
            <v-text-field
              variant="text"
              dense
              placeholder="Votre adresse e-mail"
            ></v-text-field>
            <v-label color="black">Mot de passe :</v-label>
            <v-text-field
              hide-details
              variant="text"
              dense
              placeholder="Votre mot de passe"
            ></v-text-field>
          </v-card>
          <v-checkbox label="Se souvenir de moi"></v-checkbox>
          <p class="text-center">
            <router-link to="/mot-de-passe-oublie"
              >Mot de passe oublié ?</router-link
            >
            / <router-link to="/inscription">S'inscrire</router-link>
          </p>
          <Button class="text-center mt-4" prop="Se connecter"></Button>
        </v-form>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import Button from "../components/Button.vue";
</script>

<style lang="css" scoped>
#card {
  border: 2px solid black !important;
}
#form-container {
  position: relative;
  overflow: visible;
  z-index: 1000;
}
#bar {
  position: absolute;
  width: 85vw;
  height: 3px;
  background: black;
  border-radius: 1px;
  top: 35px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 0;
}
</style>
