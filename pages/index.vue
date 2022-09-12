<template>
  <v-row justify="center" align="center">
    <v-col cols="12"> </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  created() {
    if (this.$auth && this.$auth.user) {
      this.$router.push("/main");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>
