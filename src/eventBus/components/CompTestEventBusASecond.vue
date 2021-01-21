<template>
  <div>
    <div>Component CompTestEventBusASecond msg: {{ msg }}</div>
  </div>
</template>

<script>
import EventBus01 from "./../EventBus01";

export default {
  data() {
    return {
      msg: "",
      note: "",
    };
  },
  mounted() {
    /**
             EventBus01.$on(EventBusInputData01,…) sẽ chờ đợi bất kỳ khi nào EventBus01.$emit(EventBusInputData01,…)
            thì nó sẽ gọi function đằng sau (ở ví dụ của mình là update message).

            Note:
                Có thể dùng EventBus01.$once() nếu chỉ muốn nhận event một lần duy nhất.
                Dùng EventBus01.$off() khi bạn không muốn nhận event nữa.
        */
    EventBus01.$on("EventBusInputData01", (payLoad) => {
      this.msg = payLoad;
    });
  },
};
</script>