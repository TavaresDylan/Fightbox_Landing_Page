<template>
  <v-container>
    <h1 class="text-uppercase text-h4 font-weight-bold">TEAM</h1>
    <h2 class="text-uppercase text-subtitle-1 mb-4">L'équipe Fightbox</h2>
    <v-row>
      <v-col
        v-for="member in memberList"
        cols="12"
        md="6"
        lg="3"
        class="d-flex flex-column align-center"
      >
        <v-avatar variant="outlined" class="mb-4" size="220" :image="getImageUrl(member.image)" />
        <h2 class="text-uppercase fs-4 text-center">
          {{ member.firstname }} {{ member.lastname }}
        </h2>
        <p class="text-center">
          {{ member.description }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
type IMember = {
  firstname: string;
  lastname: string;
  image: string;
  description: string;
};

const memberList: IMember[] = [
  {
    firstname: "Dylan",
    lastname: "Tavares",
    image: "IMG_1764_rezied.jpg",
    description: `Développeur du projet Fightbox.fr, étudiant au campus Ynov Toulous, passionné par les nouvelles technologies et le web.`,
  },
  {
    firstname: "Gillian",
    lastname: "Wodey",
    image: "IMG_4167_rezied.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
    doloremque, sint, dolorum possimus saepe iusto ducimus, laudantium
    nulla aspernatur quibusdam omnis facilis hic atque tempore velit
    vero! Nihil, iure modi.`,
  },
  {
    firstname: "Sheila",
    lastname: "Bresolin",
    image: "IMG_4154_rezied_2.jpeg",
    description: `Designeuse UI/UX du site Fightbox.fr, étudiante au campus Ynov Toulouse, passionnée par l'UI/UX.`,
  },
  {
    firstname: "Marvin",
    lastname: "???",
    image: "IMG_4154_rezied.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
    doloremque, sint, dolorum possimus saepe iusto ducimus, laudantium
    nulla aspernatur quibusdam omnis facilis hic atque tempore velit
    vero! Nihil, iure modi.`,
  },
];

const getImageUrl = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};
</script>
