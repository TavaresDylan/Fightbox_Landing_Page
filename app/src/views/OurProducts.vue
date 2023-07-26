<template>
  <v-container>
    <h1 class="mb-6">Les box</h1>

    <v-row justify="center" id="term-card-row">
      <div id="bar"></div>
      <v-col cols="8" md="6" lg="4">
        <TermCard>
          <v-img cover src="https://picsum.photos/1920/1080"></v-img>
        </TermCard>
        <v-card class="card rounded-lg mt-6">
          <v-card-title class="font-weight-bold">Nutrition</v-card-title>
          <v-list>
            <v-list-item> <v-icon icon="mdi-check" />Collation </v-list-item>
            <v-list-item> <v-icon icon="mdi-check" />Accessoires </v-list-item>
            <v-list-item>
              <v-icon icon="mdi-check" />Livret Conseil
            </v-list-item>
          </v-list>
          <v-card-action class="d-flex justify-center pa-1 mb-1">
            <v-btn class="rounded-xl" variant="outlined"
              >Choisir ma boîte</v-btn
            >
          </v-card-action>
        </v-card>
      </v-col>
      <v-col cols="8" md="6" lg="4">
        <TermCard>
          <v-img cover src="https://picsum.photos/1920/1080"></v-img>
        </TermCard>
        <v-card class="card rounded-lg mt-6">
          <v-card-title class="font-weight-bold">Action</v-card-title>
          <v-list>
            <v-list-item> <v-icon icon="mdi-check" />Textile </v-list-item>
            <v-list-item>
              <v-icon icon="mdi-check" />Materiel d'entrainement
            </v-list-item>
            <v-list-item>
              <v-icon icon="mdi-check" />Livret Conseil
            </v-list-item>
          </v-list>
          <v-card-action class="d-flex justify-center pa-1 mb-1">
            <v-btn class="rounded-xl" variant="outlined"
              >Choisir ma boîte</v-btn
            >
          </v-card-action>
        </v-card>
      </v-col>
      <v-col cols="8" md="6" lg="4">
        <TermCard>
          <v-img cover src="https://picsum.photos/1920/1080"></v-img>
        </TermCard>
        <v-card class="card rounded-lg mt-6">
          <v-card-title class="font-weight-bold">Récupération</v-card-title>
          <v-list>
            <v-list-item> <v-icon icon="mdi-check" />Collation </v-list-item>
            <v-list-item>
              <v-icon icon="mdi-check" />Produits bien-être
            </v-list-item>
            <v-list-item>
              <v-icon icon="mdi-check" />Livret Conseil
            </v-list-item>
          </v-list>
          <v-card-action class="d-flex justify-center pa-1 mb-1">
            <v-btn class="rounded-xl" variant="outlined"
              >Choisir ma boîte</v-btn
            >
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import TermCard from "../components/TermCard.vue";
document.title = "Nos produits";
</script>

<style lang="css" scoped>
.card {
  border: 2px solid black;
  transition: 0.2s;
}
.card:hover {
  transition: 0.2s;
  transform: translateY(-5px);
}
#term-card-row {
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
