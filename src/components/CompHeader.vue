<template>
  <header>
    <h1>{{ text }} - {{ titleHeader }} <br/>
      <button v-on:click="changeTitleHeader">Thay doi title header</button>
    </h1>
  </header>
</template>

<script>
export default {
  // name: "comp-header",
  props: {
      titleHeader: String,
      language: {
        type: String,
        default: "en-US"
      },
  },
  data() {
    return {
      text: "my header",
    };
  },
  methods: {
    changeTitleHeader(e) {
      // console.log(this);
      var data = {
        title: "test -> data truyen thong qua biến event"
      }
      this.$emit('changeTitleEvent', data);
    }
  }
};
</script>

<style>
</style>