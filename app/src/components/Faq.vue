<template>
  <v-container id="container-faq" fluid class="bg-white mb-n6 rounded-t-xl">
    <v-container>
      <span class="text-h6 font-weight-bold">FAQ</span>
      <v-expansion-panels class="my-4" variant="accordion">
        <v-expansion-panel
          elevation="0"
          v-for="item in faqContent"
          :key="item.title"
          :title="item.title"
          :text="item.text"
          expand
          focusable
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

type TfaqContent = {
  title: string;
  text: string;
};

const faqContent = ref<Array<TfaqContent>>([
  {
    title: "Que comprend votre abonnement ?",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
  {
    title: "Quelles différence y a-t-il entre les abonnements ?",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
  {
    title:
      "Comment adhérer à une autre formule lorsque j'ai un abonnement en cours (par exemple lorsqu'il y a des offres promotionnelles) ?",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
  {
    title: "Comment effectuer la résiliation d'abonnement ?",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
  {
    title:
      "J'ai payé l'abonnement mais il n'est pas actif, que dois-je faire ?",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
]);
</script>

<style lang="css" scoped>
#container-faq {
  border: 2px solid black !important;
}
</style>
