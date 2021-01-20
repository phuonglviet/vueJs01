<template>
  <div>
    <h1>VueRouter Home Page</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere magnam
      dolorum nam corrupti officiis esse vero, at repellendus optio ducimus.
      Placeat temporibus praesentium expedita doloribus fugit, ad architecto.
      Impedit, veritatis.
    </p>
    <div>
      <v-btn
      color="success"
      class="red--text"
      style="color: green"
      @click="callVueGlobalMethod"
      >Global component button</v-btn
    >
    </div>
  </div>
</template>


<script>
import Vue from 'vue'

export default {
  name: "comp-footer",
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    callVueGlobalMethod() {
      Vue.myGlobalMethod();
    }
  },
};
</script>

<style>
</style>
