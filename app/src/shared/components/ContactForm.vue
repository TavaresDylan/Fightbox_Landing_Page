<template>
  <v-card tile>
    <v-card-title><h3>Contactez-nous</h3></v-card-title>
    <v-card-text>
      <form class="mt-4" action="">
        <v-text-field
        prepend-inner-icon="mdi-at"
          label="Email"
          variant="outlined"
          type="text"
          placeholder="Entrez votre email"
        ></v-text-field>
        <v-textarea variant="outlined" placeholder="Entrez votre message"></v-textarea>
        <div class="text-right">
          <v-btn color="primary">Envoyer</v-btn>
        </div>
      </form>
    </v-card-text>
  </v-card>
</template>
