<template>
  <v-row>
    <v-col lg="4" md="12">
      <v-card class="login-card">
        <p class="title-card mb-1">{{ $t("create_new_password") }}</p>
        <p class="subtitle-card">{{ $t("enter_you_password_text") }}</p>
        <p class="label-card">{{ $t("create_password") }}</p>
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
        <p class="label-card">{{ $t("confirm_password") }}</p>
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
        <p class="label-card">{{ $t("verification_code") }}</p>
        <v-text-field v-model="code" dense outlined hide-details></v-text-field>
        <div class="pt-5 text-center">
          <v-btn
            block
            color="primary"
            elevation="0"
            :loading="loading"
            @click="send"
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
      password: "",
      confirm_password: "",
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
      };
    },
  },
  methods: {
    async send() {
      this.loading = true;
      let check = this.password == this.confirm_password;
      check =
        check &&
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(this.password);
      if (check) {
        let res = await this.$axios.post("/reset_password", {
          code: this.code,
          password: this.password,
        });
        if (res.data && res.data.success) {
          await this.$auth
            .loginWith("local", {
              data: {
                email: res.data.data.email,
                password: this.password,
              },
            })
            .then((response) => {
              this.$router.push("/main");
              // console.log(response);
            })
            .catch((er) => {
              console.log(er);
            });
        }
      }
      this.loading = false;
    },
  },
};
</script>
<style>
</style>
