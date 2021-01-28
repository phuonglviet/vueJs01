<template>
  <div>
    This is ProvideComp:
    <!-- <slot /> -->
    <InjectComp> </InjectComp>
  </div>
</template>

<script>
import InjectComp from "@/provideInject/InjectComp.vue";

export default {

  components: {
    InjectComp,
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

