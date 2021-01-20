<template>
  <div>
    <input placeholder="Enter Text Here" v-model="tempMessage" />
    <input placeholder="Enter memo Here" v-model="memo" />
    <div>
      <v-btn
        @click="sendMessage"
        color="success"
        style="color: green;"
        >Click to Event bus plugin emit data</v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tempMessage: "",
      memo: "",
    };
  },
  methods: {
    sendMessage() {
      this.$bus.emit('EventBusPluginInputData01', this.tempMessage, this.memo)
      this.tempMessage = "";
    },
  },
};
</script>