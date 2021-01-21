<template>
  <header>
    <h1 id="compHeaderH1Title" ref="compHeaderH1Title">{{ text }} - {{ titleHeader }} <br/>
      <button id="compHeaderBtnChangeTitle" v-on:click="changeTitleHeader">Thay doi title header</button>
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
  },
  mounted() {
    // console.log("Comp Header component mounted:");
  },
};
</script>

<style>
</style>