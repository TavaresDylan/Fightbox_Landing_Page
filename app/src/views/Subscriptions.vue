<template>
  <v-container>
    <h1>Les abonnements</h1>
    <v-row class="mt-4">
      <v-spacer></v-spacer>
      <v-col cols="12" md="4">
        <TermCard></TermCard>
        <v-card class="d-flex justify-center align-center flex-column mt-4 rounded-lg">
          <span class="text-h6 text-uppercase font-weight-bold my-2 ml-4 align-self-start">Passionné</span>
          <div class="align-self-start ml-6">
            <v-icon size="large" class="mr-3 font-weight-bold">mdi-check</v-icon>
            <span>3 produits</span>
          </div>

          <div style="border-top: 2px solid black; border-bottom: 2px solid black" class="w-100 my-4 py-4 d-flex justify-center">
            <span>19,99€ / bi-mensuel</span>
          </div>

          <v-btn variant="outlined" class="rounded-xl my-2">Je m'abonne</v-btn>
          <v-btn variant="outlined" class="rounded-xl my-2">J'offre</v-btn>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="4">
        <TermCard></TermCard>
        <v-card class="d-flex justify-center align-center flex-column mt-4 rounded-lg">
          <span class="text-h6 text-uppercase font-weight-bold my-2 ml-4 align-self-start">Elite</span>
          <div class="align-self-start ml-6">
            <v-icon size="large" class="mr-3 font-weight-bold">mdi-check</v-icon>
            <span>5 produits</span>
          </div>

          <div style="border-top: 2px solid black; border-bottom: 2px solid black" class="w-100 my-4 py-4 d-flex justify-center">
            <span>39,99€ / bi-mensuel</span>
          </div>

          <v-btn variant="outlined" class="rounded-xl my-2">Je m'abonne</v-btn>
          <v-btn variant="outlined" class="rounded-xl my-2">J'offre</v-btn>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import TermCard from "../components/TermCard.vue";
</script>

<style lang="css" scoped>
.v-card {
  border: 2px solid black;
}
</style>
