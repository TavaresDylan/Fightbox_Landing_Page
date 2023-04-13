<template>
  <v-container>
    <h1 class="text-uppercase text-h4 font-weight-bold">TEAM</h1>
    <h2 class="text-uppercase text-subtitle-1 mb-4">L'équipe Fightbox</h2>
    <v-row class="mx-4">
      <v-col
        v-for="member in memberList"
        cols="12"
        md="6"
        lg="6"
        class="d-flex flex-column align-center rounded my-4"
      >
        <v-avatar
          variant="outlined"
          class="mb-4"
          size="220"
          :image="getImageUrl(member.image)"
        />
        <h2 class="text-uppercase text-center">
          {{ member.firstname }} {{ member.lastname }}
        </h2>
        <p class="px-4">
          {{ member.description }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import getImageUrl from "../utilities/imageLoader.js";

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
    description: `Développeur du projet Fightbox.fr, étudiant au campus Ynov Toulouse, passionné par les nouvelles technologies et le web.
    Polyvalent et aimant le challenge, son objectif est de créer des applications toujours plus sécurisées, optimisées et maintenables.`,
  },
  {
    firstname: "Gillian",
    lastname: "Wodey",
    image: "IMG_4167_rezied.jpeg",
    description: `Graphiste de Fightbox.fr et passionnée de design et d'art.
    Elle possède une grande expérience dans le domaine du graphisme. Passionnée par les arts et particulièrement à l'histoire de l'art.
    Créatrice de designs uniques et originaux.`,
  },
  {
    firstname: "Sheila",
    lastname: "Bresolin",
    image: "IMG_4154_rezied_2.jpeg",
    description: `UX/UI Designer, ayant suivit une formation dans le jeu vidéo, aujourd'hui elle se spécialise dans l'UX/UI
    en proposant des maquettes graphique et ergonomique de site web. En collaboration avec Gillian, elle à construit la charte web de FightBox.fr.`,
  },
  {
    firstname: "Marvin",
    lastname: "Kerthe",
    image: "IMG_4412_rezied.jpeg",
    description: `Chargé de la communication et du marketing de FightBox.fr et étudiant au sein du campus d’Ynov Toulouse.
    Il est passionné par l’entreprenariat, l’innovation et les sports de combat.
    Les défis l’animent au quotidien et la persévérance est son maître mot.`,
  },
];
</script>
