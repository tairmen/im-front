<template>
  <v-app-bar fixed app elevation="0">
    <img class="logo-img" src="/logo_full.svg" />
    <v-spacer></v-spacer>
    <LangSelect />
    <span class="welcome-nav">{{ $t("welcome") }} </span>
    <span class="primary--text px-1">{{ email }}</span>
    <v-btn
      class="white-paper-btn ml-4"
      color="primary"
      elevation="0"
      @click="$auth.logout()"
      >{{ $t("log_out") }}</v-btn
    >
  </v-app-bar>
</template>
<script>
import LangSelect from "~/components/settings/LangSelect";
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  components: {
    LangSelect,
  },
  data() {
    return {};
  },
  computed: {
    email() {
      if (this.$auth && this.$auth.user) {
        return this.$auth.user.email;
      } else {
        return "";
      }
    },
  },
};
</script>
<style>
.v-app-bar {
  background: transparent !important;
  padding: 0px 150px;
}
.white-paper-btn {
  border-radius: 10px;
  color: #ffffff !important;
  text-transform: none;
}
.welcome-nav {
  font-weight: 300;
  color: #8e8e8e;
}
@media (max-width: 960px) {
  .v-app-bar {
    padding: 0px 10px;
  }
}
@media (max-width: 560px) {
  .welcome-nav {
    display: none;
  }
  .logo-img {
    display: none;
  }
}
</style>
