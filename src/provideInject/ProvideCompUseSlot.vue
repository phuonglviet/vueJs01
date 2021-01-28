<template>
  <div>
    This is ProvideComp use slot:
    <slot />
  </div>
</template>

<script>

export default {

  components: {
  },
  provide: function () {
    return {
      foo: "bar",
      getThing: this.getThing,
      setThing: this.setThing,
    };
  },

  data() {
    return {
      reactive: {
        value: "Hello there",
      },
      thing: "Hello World",
    };
  },
  props: {},
  methods: {
    getThing: function () {
      return this.thing;
    },
    setThing: function (data) {
      this.thing = data;
    },
  },
  created() {
    // console.log("ProvideComp:", this.reactive.value);
  },
};
</script>

