<template>
  <v-app dark>
    <NavBar />
    <v-main class="main-login-background">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
export default {
  name: "DefaultLayout",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      
    };
  },
};
</script>
<style>
html {
  overflow-y: hidden;
  font-family: Ubuntu;
}
.main-login-background {
  background: url('/main_bg.png');
  background-size: cover;
  padding-left: 150px !important;
  padding-right: 150px !important;
}
</style>