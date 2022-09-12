<template>
  <v-row>
    <v-col lg="4" md="12">
      <v-card class="login-card">
        <p class="title-card mb-1">{{ $t("reset_password") }}</p>
        <p class="subtitle-card">{{ $t("enter_you_email_text") }}</p>
        <p class="label-card">{{ $t("email") }}</p>
        <v-text-field
          v-model="email"
          dense
          outlined
          hide-details
        ></v-text-field>
        <div class="pt-5 text-center">
          <v-btn
            block
            color="primary"
            elevation="0"
            @click="$router.push('/reset')"
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
      email: "",
    };
  },
};
</script>
<style>
</style>
