<template>
  <v-row>
    <v-col lg="4" md="12">
      <v-card class="login-card">
        <p class="title-card mb-1">{{ $t("email_verification") }}</p>
        <p class="subtitle-card">{{ $t("email_verification_text") }}</p>
        <p class="label-card">{{ $t("verification_code") }}</p>
        <v-text-field v-model="code" dense outlined hide-details></v-text-field>
        <div class="pt-5 text-center">
          <v-btn
            block
            color="primary"
            elevation="0"
            :loading="loading"
            @click="verify"
            >{{ $t("send") }}</v-btn
          >
        </div>
      </v-card>
    </v-col>
    <v-col class="d-none d-md-block"></v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      code: "",
      loading: false,
    };
  },
  methods: {
    async verify() {
      this.loading = true;
      await this.$auth
        .loginWith("local", {
          data: {
            code: this.code,
          },
        })
        .then((response) => {
          this.$router.push("/main");
          // console.log(response);
        })
        .catch((er) => {
          console.log(er);
        });
      this.loading = false;
    },
  },
};
</script>
<style>
</style>
