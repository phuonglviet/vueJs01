<template>
  <div>
    <div ref="divContent">
      {{ content }}
    </div>
    <v-btn
      color="success"
      class="red--text"
      style="color: green; background-color:gray"
      text
      @click="updateValue"
    >
      update value
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    // id: "",
  },
  data() {
    return {
      content:
        "To emit the content, you need to grab the innerText or innerHTML of the div. So, our updateInput method needs to look like this",
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("input", this.$refs.divContent.innerText);
    },
  },
};
</script>