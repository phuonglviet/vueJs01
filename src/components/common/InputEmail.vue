<template>
  <div>
    <label>{{ label }}</label>
    <p>
      <input
        class="input"
        type="text"
        :id="id"
        :placeholder="label"
        :value="value"
        :required="required"
        @input="updateValue"
      />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    label: "",
    id: "",
    placeholder: "",
    value: {
      type: String,
    },
    required: false,
  },

  data() {
    return {
      //   value: "",
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>