<template>
  <div>
    <div>{{ currentDate }}</div>
    <v-btn
      color="success"
      class="red--text"
      style="color: green"
      @click="onGlobalCompBtnClick"
      >Global component button</v-btn
    >
    <v-btn
      color="success"
      class="red--text"
      style="color: green"
      @click="callVueGlobalMethod"
      >Global component button</v-btn
    >
  </div>
</template>

<script>
import Vue from 'vue'
import moment from "moment";

export default {
  name: "comp-footer",
  data() {
    return {
      currentDate: moment().format('MMMM Do YYYY, h:mm:ss a'),

    };
  },
  computed: {
    // getNow() {
    //   this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    // },
  },
  methods: {
    onGlobalCompBtnClick: function (event) {
      this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
      Vue.myGlobalMethod = () => {
        // console.log("myGlobalMethod");
      };
    },
    callVueGlobalMethod() {
      Vue.myGlobalMethod();
    },
  },
};
</script>

<style>
</style>