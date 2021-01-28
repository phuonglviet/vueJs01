<template>
  <div class="date-picker">
    Month:
    <!-- #region  -->
    <input
      type="number"
      ref="monthPicker"
      :value="value.month"
      @input="updateDate()"
    />
    Year:
    <input
      type="number"
      ref="yearPicker"
      :value="value.year"
      @input="updateDate()"
    />
    <!-- #endregion -->
  </div>
</template>

<script>
export default {
  props: {
    value: Object,
  },
  methods: {
    //#region methods
    updateDate() {
      this.$emit("input", {
        month: +this.$refs.monthPicker.value,
        year: +this.$refs.yearPicker.value,
      });
    },
  },
  //#endregion
};
</script>