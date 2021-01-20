<template>
  <div>
    <CompTestEventBusAFirst />
    <hr />
    <CompTestEventBusASecond />
  </div>
</template>

<script>
import CompTestEventBusAFirst from "./components/CompTestEventBusAFirst.vue";
import CompTestEventBusASecond from "./components/CompTestEventBusASecond.vue";

export default {
  components: {
    CompTestEventBusAFirst,
    CompTestEventBusASecond,
  },
  data() {
    return {
      message: "Message default.",
    };
  },
};
</script>