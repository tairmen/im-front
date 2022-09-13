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
          :rules="validation.email"
        ></v-text-field>
        <p class="label-card-reg">{{ $t("phone") }}</p>
        <v-text-field
          v-model="phone"
          dense
          outlined
          :rules="validation.number"
        ></v-text-field>
        <p class="label-card-reg">{{ $t("create_password") }}</p>
        <v-text-field
          v-model="password"
          dense
          outlined
          :type="is_show_pass ? 'text' : 'password'"
          :rules="validation.password"
          ><template v-slot:append>
            <v-icon @click="is_show_pass = !is_show_pass" color="primary">{{
              is_show_pass ? "mdi-eye" : "mdi-eye-off"
            }}</v-icon>
          </template></v-text-field
        >
        <p class="label-card-reg">{{ $t("confirm_password") }}</p>
        <v-text-field
          v-model="confirm_password"
          dense
          outlined
          :type="is_show_pass_1 ? 'text' : 'password'"
          :error-messages="conf_data"
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
            <nuxt-link class="pt-3" :to="'#'">{{
              $t("terms&condition")
            }}</nuxt-link></span
          >
        </div>
        <div class="pt-5 text-center">
          <v-btn
            block
            color="primary"
            elevation="0"
            :loading="loading"
            @click="register"
            >{{ $t("sign_up") }}</v-btn
          >
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
      conf_data: [],
      loading: false,
    };
  },
  watch: {
    confirm_password(v) {
      if (v != this.password) {
        this.conf_data = [this.$t("password_match")];
      } else {
        this.conf_data = [];
      }
    },
  },
  computed: {
    validation() {
      return {
        password: [
          (v) => !!v || this.$t("password_required"),
          (v) =>
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v) ||
            this.$t("password_create_description"),
        ],
        number: [
          (v) =>
            (!!v &&
              v.length >= 11 &&
              v.length <= 13 &&
              /^[\d ()+-]+$/.test(v)) ||
            this.$t("invalid_phone_number"),
        ],
        email: [
          (v) => !!v || this.$t("enter_verification_email"),
          (v) => /.+@.+\..+/.test(v) || this.$t("enter_verification_email"),
        ],
      };
    },
  },
  methods: {
    async register() {
      this.loading = true;
      let check = this.password == this.confirm_password;
      check =
        check &&
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(this.password);
      check = check && /.+@.+\..+/.test(this.email);
      check = check && /^[\d ()+-]+$/.test(this.phone);
      if (check) {
        let res = await this.$axios.post("/register", {
          phone: this.phone,
          email: this.email,
          password: this.password,
        });
        if (res.data && res.data.success) {
          this.$router.push('/verification');
        }
      }
      this.loading = false;
    },
  },
};
</script>
<style>
.label-agree {
  font-size: 14px;
  margin-top: 12px;
}
.label-card-reg {
  margin-top: 0px !important;
  margin-bottom: 4px !important;
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
