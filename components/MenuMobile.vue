<template>
  <v-navigation-drawer
    v-model="menu"
    app
    class="d-block d-md-none px-5 pt-8"
    width="80%"
    max-width="300"
  >
    <div class="d-flex align-center justify-space-between mb-4">
      <v-icon @click="menu = !menu" color="#061042">mdi-close</v-icon>
    </div>
    <div v-for="(item, i) in items" :key="i">
      <div class="mb-6" @click="$router.push(item.to)">
        <p class="ma-0">
          {{ $t(item.text) }}
        </p>
      </div>
    </div>
  </v-navigation-drawer>
</template>
<script>
import LangSelect from "~/components/settings/LangSelect";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "MobMenu",
  components: {
    LangSelect,
  },
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    ...mapGetters("menu", {
      items: "getAllMenu",
    }),
    ...mapGetters({
      menuM: "menu/mobileMenu",
    }),
  },
  watch: {
    menuM(v) {
      if (v) {
        this.menu = v;
      }
    },
    menu(v) {
      if (!v) {
        this.unsetMobileMenu();
      }
    },
  },
  methods: {
    ...mapMutations({ unsetMobileMenu: "menu/setMobileMenu" }),
  },
};
</script>