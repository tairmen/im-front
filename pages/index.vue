<template>
  <v-row justify="center" align="center">
    <v-col cols="12"> </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  created() {
    this.$router.push("/login");
  },
};
</script>
