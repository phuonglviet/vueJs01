<script>
export default {
  render: function (createElement) {
    return createElement(
      "h" + this.level, // tên thẻ
      this.$slots.default // mảng các phần tử con
    );
  },
  props: {
    level: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style>
</style>