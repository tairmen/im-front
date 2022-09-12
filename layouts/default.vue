<template>
  <v-app dark>
    <MainNavBar v-if="main_bav_bar" />
    <NavBar v-else />
    <v-main :class="!main_bav_bar ? 'login-background' : 'main-background'">
      <Nuxt />
    </v-main>
    <Footer v-if="!main_bav_bar" />
  </v-app>
</template>

<script>
import NavBar from "~/components/NavBar";
import MainNavBar from "~/components/MainNavBar";
import Footer from "~/components/Footer";
export default {
  name: "DefaultLayout",
  components: {
    NavBar,
    Footer,
    MainNavBar,
  },
  data() {
    return {};
  },
  computed: {
    main_bav_bar() {
      return this.$route.name == "main";
    },
  },
  created() {
    console.log("this.$route", this.$route);
  },
};
</script>
<style>
html {
  overflow-y: hidden;
  font-family: Ubuntu;
}
.login-background {
  background: url("/main_bg.png");
  background-size: cover;
  padding-left: 160px !important;
  padding-right: 160px !important;
}
.main-background {
  background: #ebebeb;
  background-size: cover;
  padding-left: 160px !important;
  padding-right: 160px !important;
}

.login-card {
  padding: 20px !important;
  margin-top: 20%;
}
.login-card .title-card {
  text-align: center;
  color: #05042b;
  font-size: 24px;
  font-weight: 700;
}
.login-card .subtitle-card {
  font-family: "Assistant";
  text-align: center;
  color: #333333;
  font-size: 14px;
  font-weight: 300;
}
.label-card {
  margin-bottom: 4px !important;
  margin-top: 16px;
}
a {
  text-decoration: none !important;
}

@media (max-width: 960px) {
  .login-background {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .main-background {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .login-card {
    margin-top: 20px;
  }
  .login-card .title-card {
    font-size: 20px;
  }
  .login-card .subtitle-card {
    font-size: 12px;
  }
}
</style>