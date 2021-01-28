<template>
  <div>
    This is InjectComp slot: <br>
    thing: {{ thing }} <br>
    foo: {{ foo }}
      <v-text-field v-model="thing" filled />
  </div>
</template>

<script>
export default {
  inject: [
    "getThing", 
    "setThing",
    "foo",
    ],
  //   inject: {
  //     foo: { default: "foo" },
  //   },
  data() {
    return {};
  },
  props: {},
  computed: {
    thing: {
      get: function () {
        return this.getThing();
      },
      set: function (d) {
        this.setThing(d);
      },
    },
  },
  methods: {},
  created() {
    // console.log("InjectComp:", this.foo); // => "bar"
  },
  
};
</script>