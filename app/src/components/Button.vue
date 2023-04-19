<template>
  <div>
    <v-btn size="x-large" prepend-icon="mdi-arrow-right" color="primary" class="rounded rounded-xl" id="custom-btn">
      {{prop.prop}}
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
const prop = defineProps<{prop: string}>();
</script>

<style lang="css" scoped>
#custom-btn{
  border: 2px solid black;
  font-weight: bold;
}
</style>
