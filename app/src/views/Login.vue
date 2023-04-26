<template>
  <v-container>
    <h1 class="mt-4">Connexion</h1>
    <v-row id="form-container">
      <div id="bar"></div>
      <v-spacer></v-spacer>
      <v-col cols="10" md="6" lg="4">
        <v-form @submit.prevent>
          <v-card
            id="card"
            outlined
            class="px-4 py-1 border border-dark rounded rounded-lg"
          >
            <v-label color="black">E-mail :</v-label>
            <v-text-field
              class="mb-2"
              v-model="mail"
              variant="text"
              hide-details="auto"
              :rules="isNotEmpty"
              dense
              color="black"
              placeholder="Votre adresse e-mail"
            ></v-text-field>
            <v-label color="black">Mot de passe :</v-label>
            <v-text-field
              class="mb-2"
              v-model="password"
              hide-details="auto"
              variant="text"
              type="password"
              :rules="isNotEmpty"
              dense
              required
              placeholder="Votre mot de passe"
            ></v-text-field>
          </v-card>

          <v-checkbox
            v-model="rememberMe"
            label="Se souvenir de moi"
          ></v-checkbox>
          <p class="text-center">
            <router-link to="/mot-de-passe-oublie"
              >Mot de passe oublié ?</router-link
            >
            / <router-link to="/inscription">S'inscrire</router-link>
          </p>
          <div class="text-center mt-4">
            <v-btn
              @click="submit()"
              size="x-large"
              prepend-icon="mdi-arrow-right"
              color="primary"
              class="rounded rounded-xl"
              id="custom-btn"
            >
              Se Connecter
            </v-btn>
          </div>
        </v-form>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const mail = ref("");
const password = ref("");
const rememberMe = ref(false);

const isNotEmpty = [(v: string) => !!v || "Ce champ est requis"];

function submit() {
  console.log("submited");
}
</script>

<style lang="css" scoped>
a {
  color: black;
  text-decoration: none;
  transition: ease-in 0.1s;
}
a:hover {
  color: #0000ff;
  transition: ease-in 0.1s;
}
#custom-btn {
  border: 2px solid black;
  font-weight: bold;
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
#card {
  border: 2px solid black !important;
}
</style>
