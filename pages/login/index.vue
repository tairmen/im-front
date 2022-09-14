<template>
  <v-row>
    <v-col lg="4" md="12">
      <v-card class="login-card">
        <p class="title-card">{{ $t("login") }}</p>
        <p class="label-card">{{ $t("email") }}</p>
        <v-text-field
          v-model="email"
          dense
          outlined
          hide-details
        ></v-text-field>
        <!-- <p class="label-card">{{ $t("phone") }}</p>
        <v-text-field
          v-model="phone"
          dense
          outlined
          hide-details
        ></v-text-field> -->
        <p class="label-card">{{ $t("password") }}</p>
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
        <div class="d-flex remember">
          <v-checkbox
            class="mt-2"
            v-model="remember_me"
            dense
            hide-details
            :label="$t('remember_me')"
          ></v-checkbox>
          <v-spacer></v-spacer>
          <nuxt-link class="pt-3" :to="'/forgot'">{{
            $t("forgot_password")
          }}</nuxt-link>
        </div>
        <div class="pt-5 text-center">
          <v-btn
            block
            color="primary"
            elevation="0"
            :loading="loading"
            @click="run_login"
            >{{ $t("login") }}</v-btn
          >
          <div class="error-mess" v-if="error_mess">{{ error_mess }}</div>
          <div class="bottom-txt">{{ $t("dont_have_account") }}</div>
          <nuxt-link class="sign-up-link" :to="'/signup'">{{
            $t("sign_up")
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
      password: "",
      is_show_pass: false,
      remember_me: false,
      loading: false,
      error_mess: "",
    };
  },
  methods: {
    async run_login() {
      this.loading = true;
      await this.$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response) => {
          this.$router.push("/main");
          // console.log(response);
        })
        .catch((er) => {
          console.log(er);
          this.error_mess = 'Wrong password or email';
        });
      this.loading = false;
    },
  },
};
</script>
<style>
.remember label {
  font-size: 14px;
}
.remember a {
  font-size: 14px;
}
.bottom-txt {
  margin-top: 12px;
  font-size: 14px;
}
.sign-up-link {
  margin-top: 8px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
