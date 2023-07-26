<template>
  <v-container>
    <h1 class="mt-4">Inscription</h1>
    <v-row id="form-container">
      <div id="bar"></div>
      <v-spacer></v-spacer>
      <v-col cols="10" md="6" lg="4">
        <v-form ref="form" @submit.prevent>
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
              :rules="mailRules"
              dense
              placeholder="......................"
            ></v-text-field>
            <v-label color="black">Mot de passe :</v-label>
            <v-text-field
              class="mb-2"
              v-model="password"
              hide-details="auto"
              variant="text"
              :type="displayPassword ? 'text' : 'password'"
              :rules="passwordRules"
              :append-inner-icon="displayPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="() => (displayPassword = !displayPassword)"
              dense
              required
              placeholder="......................"
            ></v-text-field>
            <v-label for="confirmPassword"
              >Confirmation du mot de passe :</v-label
            >
            <v-text-field
              name="confirmPassword"
              class="mb-2"
              v-model="confirmPassword"
              hide-details="auto"
              variant="text"
              :type="displayConfirmPassword ? 'text' : 'password'"
              :rules="passwordConfirmRules"
              dense
              required
              placeholder="......................."
              :append-inner-icon="
                displayConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
              "
              @click:append-inner="
                () => (displayConfirmPassword = !displayConfirmPassword)
              "
            ></v-text-field>
          </v-card>

          <p class="text-center mt-4">
            <router-link to="/connexion">Déjà inscrit ?</router-link>
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
              S'inscrire
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

document.title = "Inscription";

const form = ref<HTMLFormElement | null>(null);
const mail = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");
const displayPassword = ref<boolean>(false);
const displayConfirmPassword = ref<boolean>(false);

const passwordRules = [
  (v: string) =>
    (v.length >= 8 && /[^A-Za-z0-9]/.test(v)) ||
    "Doit contenir au moins 8 caractères et un caractère spécial",
];
const passwordConfirmRules = [
  (v: string) =>
    v === password.value || "Les mots de passe ne correspondent pas",
  (v: string) => v !== "" || "Ce champ est requis",
];
const mailRules = [
  (v: string) => !!v || "Ce champs est requis",
  (v: string) => /.+@.+\..+/.test(v) || "L'e-mail doit être valide",
];

function submit() {
  if (form.value?.checkValidity()) {
    console.log(
      `Signup form submited with following values : \n password : ${password.value}\n mail : ${mail.value}`
    );
    //TODO: API call to related route to signup
  } else {
    form.value?.validate();
    console.log("Signup form not submited because of empty fields");
  }
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
