<template>
  <v-col
    cols="12"
    md="6"
    class="text-center d-flex justify-center align-center"
  >
    <v-avatar
      variant="outlined"
      size="374"
      :image="getImageUrl('img','IMG_4419_rezied.jpeg')"
    />
  </v-col>
  <v-col cols="12" md="6">
    <h1 class="text-uppercase font-weight-bold">Sarah</h1>
    <h2 class="text-uppercase text-subtitle-1 mb-4">Fondatrice de Fightbox</h2>
    <p>
      J’ai eu la chance de grandir en pratiquant du Judo Jujitsu, me permettant
      d’intégrer le groupe France et connaitre le sport à haut niveau. Durant
      mes années en sport études au centre national de Jujitsu, j’ai remporté la
      3ème place au championnat d’Europe cadet 2018 et 2020 mais aussi au
      championnat du Monde 2017, en parallèle de l’obtention de mon bac.
      Passionné par le digital et globalement de tout le domaine du numérique,
      j’ai décidé de poursuivre mes études en communication digitale. Cette
      double expérience me poussera à entreprendre mon projet Fightbox.
    </p>
  </v-col>
</template>

<script lang="ts" setup>
import getImageUrl from '../utilities/imageLoader.js';
</script>
