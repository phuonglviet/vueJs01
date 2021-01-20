<template>
  <div>Component testEventBusPluginBar received msg: {{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
      /**
       * lắng nghe sự kiện EventBusPluginInputData01 ở testEventBusPluginFoo, 
       * khi nào thấy có sự kiện thì this.msg ở Bar bằng với giá trị của được gửi kèm trong sự kiện EventBusPluginInputData01
       */
    this.$bus.on("EventBusPluginInputData01", (value, memo) => {
      this.msg = value + " - " + memo;
    });
  },
};
</script>