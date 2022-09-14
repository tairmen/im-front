<template>
  <div>
    <v-row class="balance-main">
      <v-col>
        <p class="balance-title">{{ $t("your_balance") }}</p>
        <p class="balance-data">
          <span class="primary--text weighted">{{ coins }}</span> IMMI`s
        </p>
      </v-col>
      <v-col
        ><p class="balance-title">{{ $t("immicoin_value") }}</p>
        <p class="balance-data">
          <span class="primary--text weighted">1</span> IMMI = {{ price }}$
        </p></v-col
      >
    </v-row>
    <div>
      <v-btn class="white-paper-btn" color="primary" elevation="0">{{
        $t("download_white_paper")
      }}</v-btn>
    </div>
    <div class="buy-tokens-title">
      {{ $t("buy_tokens") }}
    </div>
    <v-row class="buy-tokens">
      <v-col>
        <p class="label-main">{{ $t("deposit_amount") }}</p>
        <v-text-field
          v-model="amount_usd"
          dense
          outlined
          :suffix="'USD'"
          :error-messages="amount_errors"
        ></v-text-field>
      </v-col>
      <v-col
        ><p class="label-main">{{ $t("immi_amount") }}</p>
        <v-text-field
          v-model="amount"
          dense
          outlined
          hide-details
        ></v-text-field
      ></v-col>
      <v-col
        ><v-btn
          large
          block
          class="white-paper-btn mt-6"
          color="primary"
          elevation="0"
          :disabled="!amount_usd"
          :loading="loading"
          @click="buy"
          >{{ $t("buy") }}</v-btn
        ></v-col
      >
    </v-row>
    <div class="buy-tokens-title">
      {{ $t("token_timeline") }}
    </div>
    <div class="mt-6">
      <img class="bottom-image" src="/token_timeline.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: 0.0013,
      amount_usd: null,
      amount: null,
      am_ch: false,
      am_usd_ch: false,
      loading: false,
      amount_errors: [],
    };
  },
  created() {
    if (this.$auth && this.$auth.user) {
      console.log("this.$auth.user", this.$auth.user);
    } else {
      this.$router.push("/login");
    }
  },
  watch: {
    amount() {
      if (!this.am_usd_ch) {
        let amount_usd = this.amount * this.price;
        this.am_ch = true;
        this.amount_usd = Math.round(amount_usd * 10000) / 10000;
      } else {
        this.am_usd_ch = false;
      }
    },
    amount_usd() {
      if (!this.am_ch) {
        let amount = this.amount_usd / this.price;
        this.am_usd_ch = true;
        this.amount = Math.round(amount * 100) / 100;
      } else {
        this.am_ch = false;
      }
    },
  },
  computed: {
    coins() {
      if (this.$auth && this.$auth.user) {
        if (this.$auth.user.balance) {
          let res = this.$auth.user.balance / this.price;
          return Math.round(res * 100) / 100;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
  },
  methods: {
    async buy() {
      this.loading = true;
      let res = await this.$axios.post("/payment", {
        amount: parseFloat(this.amount_usd),
      });
      if (res.data && res.data.success) {
        this.amount_errors = [];
        window.open(res.data.data.payment_url);
      } else if (res.data.message) {
        this.amount_errors = [res.data.message];
      }
      this.loading = false;
    },
  },
};
</script>
<style>
.balance-main {
  padding: 40px 40% 20px 6px;
}
.balance-title {
  color: #1a2e53;
  font-weight: 500;
  font-size: 22px;
}
.balance-data {
  color: #1a2e53;
  font-size: 56px;
  font-weight: 300;
}
.weighted {
  font-weight: 700;
}
.buy-tokens-title {
  font-weight: 500;
  font-size: 24px;
  margin-top: 30px;
}
.buy-tokens {
  padding: 20px 20% 10px 0px;
}
.label-main {
  font-weight: 300;
  font-size: 14px;
  color: #061042;
  margin-bottom: 6px !important;
}
.bottom-image {
  max-width: 80vw;
}
@media (max-width: 960px) {
  .balance-main {
    padding: 20px 20px 20px 6px;
  }
  .balance-title {
    font-size: 18px;
  }
  .balance-data {
    font-size: 24px !important;
  }
  .buy-tokens-title {
    font-size: 18px;
    margin-top: 14px;
  }
  .buy-tokens {
    padding: 20px 20px 20px 0px;
  }
  .label-main {
    font-size: 12px;
  }
}
@media (max-width: 1264px) {
  .balance-main {
    padding: 30px 60px 20px 6px;
  }
  .balance-title {
    font-size: 22px;
  }
  .balance-data {
    font-size: 32px !important;
  }
  .buy-tokens-title {
    font-size: 22px;
  }
  .buy-tokens {
    padding: 20px 40px 20px 0px;
  }
}
</style>