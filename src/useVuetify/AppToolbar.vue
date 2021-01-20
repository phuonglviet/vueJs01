<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense color="indigo">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="blue--text">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <router-link class="nav-link d-sm-none d-md-flex" to="/login" tag="li"> -->
      <div class="d-none d-lg-block">viewport:{{ this.$vuetify.breakpoint.name }}</div>
      <!-- <div class="hidden-md-and-up">bbbbbbb</div> -->
      <router-link class="nav-link" to="/login" tag="li">
        <v-btn> Login </v-btn>
      </router-link>
      <router-link class="nav-link" to="/gridSystem" tag="li">
        <v-btn>Grid System</v-btn>
      </router-link>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
      }
    },
  },
};
</script>
<style lang=""></style>
