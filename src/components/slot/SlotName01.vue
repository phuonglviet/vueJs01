<template>
  <div>
    <div>
      component con: demo slot name 01: header
      <br>
      <slot name="SlotName01Header01"></slot>
    </div>
    <div>
      component con: demo slot name 01: body
      <br>
      <slot name="SlotName01Body01"></slot>
    </div>
  </div>
</template>

<script>
export default {
 name:"slot-name01",
 date() {
     return {
     }
 },
}
</script>

<style>

</style>