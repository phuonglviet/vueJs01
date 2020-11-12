<script>
export default {
  render: function (createElement) {
    var myParagraphVNode = createElement("p", "hi");
    return createElement("div", [
      // Hai VNode này trùng nhau!
      myParagraphVNode,
      myParagraphVNode,
    ]);
  },
};
</script>

<style>
</style>