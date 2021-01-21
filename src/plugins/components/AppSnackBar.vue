<template>
  <v-snackbar
    v-model="visible"
    :timeout="type === 'error' ? -1 : timeout"
    style="white-space: pre-wrap"
  >
    <v-icon left color="yellow accent-4" v-if="type === 'error'"
      >mdi-alert-outline</v-icon
    >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="visible = false"
        >閉じる</v-btn
      >
    </template>
  </v-snackbar>
</template>
<script>
// we must import our Modal plugin instance
// because it contains reference to our Eventbus
import Snackbar from "@/plugins/snackbar";

export default {
  data() {
    return {
      visible: false,
      title: "",
      text: "",
      timeout: 3000,
      type: "info",
    };
  },
  beforeMount() {
    this.$snackbar.on("showSnackbar", (value) => {
      this.show(value);
    });
  },
  methods: {
    hide() {
      this.visible = false;
    },
    confirm() {
      // we must check if this.onConfirm is function
      if (typeof this.onConfirm === "function") {
        // run passed function and then close the modal
        this.onConfirm();
        this.hide();
      } else {
        // we only close the modal
        this.hide();
      }
    },
    show(params) {
      // making modal visible
      this.visible = true;
      this.text = params.text;
      this.type = params.type || "info";
    },
  },
};
</script>
