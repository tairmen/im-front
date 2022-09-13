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
          :rules="validation.email"
        ></v-text-field>
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
      email: "",
      loading: false
    };
  },
  computed: {
    validation() {
      return {
        email: [
          (v) => !!v || this.$t("enter_verification_email"),
          (v) => /.+@.+\..+/.test(v) || this.$t("enter_verification_email"),
        ],
      };
    },
  },
  methods: {
    async send() {
      this.loading = true;
      let check = /.+@.+\..+/.test(this.email);
      if (check) {
        let res = await this.$axios.post("/email_send", {
          phone: this.phone,
          email: this.email,
          password: this.password,
        });
        if (res.data && res.data.success) {
          this.$router.push('/reset');
        }
      }
      this.loading = false;
    }
  }
};
</script>
<style>
</style>
