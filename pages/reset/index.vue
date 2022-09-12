<template>
  <v-row>
    <v-col lg="4" md="12" sm="12" xs="12">
      <v-card class="login-card">
        <p class="title-card mb-1">{{ $t("create_new_password") }}</p>
        <p class="subtitle-card">{{ $t("enter_you_password_text") }}</p>
        <p class="label-card">{{ $t("create_password") }}</p>
        <v-text-field
          v-model="password"
          dense
          outlined
          :type="is_show_pass ? 'text' : 'password'"
          hide-details
          ><template v-slot:append>
            <v-icon @click="is_show_pass = !is_show_pass" color="primary">{{
              is_show_pass ? "mdi-eye" : "mdi-eye-off"
            }}</v-icon>
          </template></v-text-field
        >
        <p class="label-card">{{ $t("confirm_password") }}</p>
        <v-text-field
          v-model="confirm_password"
          dense
          outlined
          :type="is_show_pass_1 ? 'text' : 'password'"
          hide-details
          ><template v-slot:append>
            <v-icon @click="is_show_pass_1 = !is_show_pass_1" color="primary">{{
              is_show_pass_1 ? "mdi-eye" : "mdi-eye-off"
            }}</v-icon>
          </template></v-text-field
        >
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
      password: "",
      confirm_password: "",
    };
  },
};
</script>
<style>
</style>
