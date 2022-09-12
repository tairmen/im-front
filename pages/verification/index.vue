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
            @click="$router.push('/main')"
            >{{ $t("send") }}</v-btn
          >
        </div>
      </v-card>
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      code: "",
    };
  },
};
</script>
<style>
</style>
