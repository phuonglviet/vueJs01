<template>
  <div>
    <div>
      <TestEventBusPluginFoo/>
    </div>
    <hr />
    <div>
      <TestEventBusPluginBar></TestEventBusPluginBar>
    </div>
  </div>
</template>

<script>
import TestEventBusPluginFoo from "./TestEventBusPluginFoo.vue";
import TestEventBusPluginBar from "./TestEventBusPluginBar.vue";

export default {
  components: {
    TestEventBusPluginFoo,
    TestEventBusPluginBar,
  },
};
</script>