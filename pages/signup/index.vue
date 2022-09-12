<template>
  <v-row>
    <v-col lg="4" md="12">
      <v-card class="login-card">
        <p class="title-card">{{ $t("sign_up") }}</p>
        <p class="label-card">{{ $t("email") }}</p>
        <v-text-field
          v-model="email"
          dense
          outlined
          hide-details
        ></v-text-field>
        <p class="label-card">{{ $t("phone") }}</p>
        <v-text-field
          v-model="phone"
          dense
          outlined
          hide-details
        ></v-text-field>
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
        <div class="d-flex remember">
          <v-checkbox
            class="mt-2"
            v-model="aggree"
            dense
            hide-details
          ></v-checkbox>
          <span class="label-agree"
            >{{ $t("aggree_with") }}
            <nuxt-link class="pt-3" :to="'/terms'">{{
              $t("terms&condition")
            }}</nuxt-link></span
          >
        </div>
        <div class="pt-5 text-center">
          <v-btn block color="primary" elevation="0" @click="$route.push('/verification')">{{ $t("sign_up") }}</v-btn>
          <div class="bottom-txt">{{ $t("already_have_account") }}</div>
          <nuxt-link class="sign-up-link" :to="'/login'">{{
            $t("login")
          }}</nuxt-link>
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
      phone: "",
      password: "",
      confirm_password: "",
      is_show_pass: false,
      is_show_pass_1: false,
      aggree: false,
    };
  },
};
</script>
<style>
.label-agree {
  font-size: 14px;
  margin-top: 12px;
}
.bottom-txt {
  margin-top: 14px;
  font-size: 14px;
}
.sign-up-link {
  margin-top: 8px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
