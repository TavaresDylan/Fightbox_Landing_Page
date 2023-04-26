<template>
  <div>
    <v-btn @click="submit()" size="x-large" prepend-icon="mdi-arrow-right" color="primary" class="rounded rounded-xl" id="custom-btn">
      {{props.btnText}}
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{btnText: string}>();

function submit(){
  console.log("submited");
}
</script>

<style lang="css" scoped>
#custom-btn{
  border: 2px solid black;
  font-weight: bold;
}
</style>
