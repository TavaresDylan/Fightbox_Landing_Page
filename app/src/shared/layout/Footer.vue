<template>
  <v-footer class="bg-secondary py-6">
      <v-row>
        <v-col cols=12 sm=6>
          <ContactForm></ContactForm>
        </v-col>

        <v-col cols=12 sm=6 v-for="item in footerList" :key="item.title">
          <v-list density="compact">
            <v-list-subheader>{{item.title}}</v-list-subheader>
            <v-list-item v-for="it in item.items" :key="it">
              <router-link class="router-links" to="/abonnements">{{it}}</router-link>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import ContactForm from '../components/ContactForm.vue';

type FooterList = {
  title: string;
  items: string[];
}

const footerList:Ref<FooterList[]> = ref([{
  title: "Title",
  items : ["FROM EMAIL", "FROM SMS", "FROM QR CODES", "SUBSCRIPTION PAGE", "SUPPORT"]
}, {
  title: "Title",
  items : ["FROM EMAIL", "FROM SMS", "FROM QR CODES", "SUBSCRIPTION PAGE", "SUPPORT"]
}, {
  title: "Title",
  items : ["FROM EMAIL", "FROM SMS", "FROM QR CODES", "SUBSCRIPTION PAGE", "SUPPORT"]
}])
</script>
