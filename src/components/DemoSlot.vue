<template>
  <div>
    <h1>My Slot Top</h1>
        <slot></slot>
    <h1>My SLot Bottom</h1>
  </div>
</template>

<script>
export default {
    name: 'demo-slot',
    data() {
        return {

        }
    }
};
</script>

<style>
</style>