<template>
  <v-footer class="main-footer" :absolute="!fixed" app>
    <div class="logo-foo">
      <img src="/logo_full_white.svg" /><span class="terms-foo"
        ><span class="priv-sel">{{ $t("privacy_policy") }}</span> |
        <span class="priv-sel">{{ $t("terms_and_cond") }}</span></span
      >
    </div>
    <v-spacer></v-spacer>
    <div class="foo-menu-item" v-for="(item, i) in items" :key="i">
      {{ $t(item.text) }}
    </div>
    <v-spacer></v-spacer>
    <div class="reserved-foo">
      <span class="socials-foo"
        ><img v-for="(item, i) in socials" :key="i" :src="item"
      /></span>
      <span>© {{ year }} {{ $t("reserved_text") }}</span>
    </div>
  </v-footer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      fixed: false,
      year: new Date().getFullYear(),
      socials: [
        "/facebook.svg",
        "/twitter.svg",
        "/instagram.svg",
        "/linkedin.svg",
      ],
    };
  },
  computed: {
    ...mapGetters("menu", {
      items: "getAllMenu",
    }),
  },
};
</script>
<style>
.main-footer {
  background: #05042a !important;
  height: 120px;
  padding: 10px 150px;
  color: white !important;
  font-size: 14px;
  font-weight: 300;
  font-family: "Assistant";
}
.logo-foo {
  display: flex;
  flex-direction: column;
}
.logo-foo img {
  height: 40px;
}
.terms-foo {
  letter-spacing: -0.05em;
}
.foo-menu-item {
  color: #ffffff;
  cursor: pointer;
  margin: 0px 20px;
  font-size: 16px;
}
.foo-menu-item:hover {
  color: #c9c9c9;
}
.reserved-foo {
  display: flex;
  flex-direction: column;
}
.reserved-foo span {
  letter-spacing: -0.05em;
}
.socials-foo {
  text-align: right;
}
.socials-foo img {
  margin: 0px 0px 0px 10px;
  cursor: pointer;
}
.priv-sel {
  cursor: pointer;
}
.priv-sel:hover {
  color: #c9c9c9;
}
</style>
