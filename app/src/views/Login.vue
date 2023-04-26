<template>
  <v-container>
    <h1 class="mt-4">Connexion</h1>
    <Form>
      <template v-slot:card-content>
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
      </template>

      <template v-slot:form-actions>
        <v-checkbox v-model="rememberMe" label="Se souvenir de moi"></v-checkbox>
        <p class="text-center">
          <router-link to="/mot-de-passe-oublie"
            >Mot de passe oublié ?</router-link
          >
          / <router-link to="/inscription">S'inscrire</router-link>
        </p>
        <Button class="text-center mt-4" btnText="Se connecter"></Button>
      </template>
    </Form>
  </v-container>
</template>

<script lang="ts" setup>
import Button from "../components/Button.vue";
import Form from "../components/Form.vue";
import { ref } from "vue";

const mail = ref("");
const password = ref("");
const rememberMe = ref(false);

const isNotEmpty = [(v: string) => !!v || "Ce champ est requis"];
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
</style>
