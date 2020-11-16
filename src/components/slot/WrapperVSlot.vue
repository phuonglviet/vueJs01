<template>
  <div class="card">
    <div class="card-header">
      <slot name="WrapperVSlotHeader"></slot>
    </div>

    <div class="card-content-01">
      <p>WrapperVSlot これは共通で表示される</p>
    </div>

    <div class="card-footer">
      <slot name="WrapperVSlotFooter"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>