<template>
<v-col cols="12" md="6" class="rounded-circle text-center d-flex justify-center">
            <v-avatar
              variant="outlined"
              size="374"
              :image="getImageUrl('Fichier 3-1.svg')"
            />
          </v-col>
          <v-col cols="12" md="6">
            <h1 class="text-uppercase font-weight-bold">Fightbox</h1>
            <h2 class="text-uppercase text-subtitle-1 mb-4">Origins</h2>
            <p>
              J'ai toujours été animé par la volonté d'apprendre de nouvelles
              choses, mais surtout de me surpasser. Le Jujitsu est pour moi le
              reflet parfait de la vie, car dans les deux cas, il faut être
              polyvalent et savoir s'adapter à chaque moment du combat. Ma
              première motivation derrière Fightbox est de rendre au sport mais
              plus précisément au Jujitsu toute ce qu'il ma appris et apporter.
              Car le sport à été pour moi une vrai école de la vie, j'ai pu y
              apprendre ma bienveillance, le partage, ma combativité mais
              surtout l'esprit de communauté.
            </p>
          </v-col>
</template>

<script lang="ts" setup>
const getImageUrl = (name: string) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
</script>
