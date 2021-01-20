<template>
  <div>
    <input placeholder="Enter Text Here" v-model="tempMessage" />
    <div>
      <v-btn
        @click="sendMessage"
        color="success"
        style="color: green;"
        >Click to Event bus emit data</v-btn>
    </div>
  </div>
</template>

<script>
import EventBus01 from "./../EventBus01";

export default {
  data() {
    return {
      tempMessage: "",
    };
  },
  methods: {
    sendMessage() {
      EventBus01.$emit("EventBusInputData01", this.tempMessage);
      this.tempMessage = "";
    },
  },
};
</script>