<template>
  <div class="card">
    <header class="card-header">
      <slot name="header"></slot>
    </header>

    <div class="card-content">
      <!-- Default Slot Content -->
      <slot></slot>
    </div>

    <footer class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {};
  },
};
</script>

<style>
</style>