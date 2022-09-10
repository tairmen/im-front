<template>
  <v-select
    class="lang-select-navbar"
    v-model="$i18n.locale"
    :items="langs"
    outlined
    dense
    hide-details
    @change="modeChange"
    item-text="name"
    item-value="code"
    :dark="isDark"
    append-icon="mdi-chevron-down"
  >
    <template v-slot:item="{ item }">
      <div class="d-flex align-center justify-space-around">
        <img
          class="rounded-circle lang_flag mx-2"
          height="28"
          width="28"
          :src="item.icon"
        />

        {{ item.name }}
      </div>
    </template>
    <template v-slot:selection="{ item, selected, on, attr }">
      <div class="d-flex align-center justify-space-around">
        <img
          class="rounded-circle lang_flag mx-2"
          height="28"
          width="28"
          :src="item.icon"
          v-bind="attr"
          :input-value="selected"
          v-on="on"
        />

        {{ item.name }}
      </div>
    </template>
  </v-select>
</template>
<script>
export default {
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  watch: {
    CURRENT_LOCALE(v) {},
  },
  computed: {
    CURRENT_LOCALE() {
      return this.$i18n.locale;
    },
    langs() {
      return this.$i18n.locales;
    },
  },

  methods: {
    modeChange() {
      localStorage.setItem("language", this.CURRENT_LOCALE);
    },
  },
};
</script>
<style>
.lang_flag {
  object-fit: cover;
}
.lang-select-navbar {
  max-width: 120px;
}
.lang-select-navbar .v-icon {
  color: #1a2e53 !important;
}
.lang-select-navbar .v-select__selections {
  color: #1a2e53 !important;
}
.lang-select-navbar fieldset {
    border-width: 0px !important;
}
</style>
