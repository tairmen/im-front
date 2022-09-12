<template>
  <v-app-bar fixed app elevation="0">
    <img class="logo-img" src="/logo_full.svg" />
    <v-spacer></v-spacer>
    <div class="d-none d-md-block menu-item" v-for="(item, i) in items" :key="i">
      {{ $t(item.text) }}
    </div>
    <v-spacer></v-spacer>
    <LangSelect />
    <v-btn class="white-paper-btn ml-4" color="primary" elevation="0">{{
      $t("white_paper")
    }}</v-btn>
    <v-btn icon @click="setMobileMenu" class="d-block d-md-none">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import LangSelect from "~/components/settings/LangSelect";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "NavBar",
  components: {
    LangSelect,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("menu", {
      items: "getAllMenu",
    }),
  },
  methods: {
    ...mapMutations({ setMobileMenu: "menu/setMobileMenu" }),
  }
};
</script>
<style>
.v-app-bar {
  background: transparent !important;
  padding: 0px 150px;
}
.menu-item {
  color: #1a2e53;
  cursor: pointer;
  font-family: "Assistant";
  font-weight: 300;
  margin: 0px 20px;
  font-size: 18px;
}
.menu-item:hover {
  color: #000000;
}
.white-paper-btn {
  border-radius: 10px;
  color: #ffffff !important;
  text-transform: none;
}
@media (max-width: 960px) {
  .v-app-bar {
    padding: 0px 10px;
  }
}
@media (max-width: 560px) {
  .logo-img {
    display: none;
  }
}
</style>
