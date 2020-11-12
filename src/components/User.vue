<template>
  <div class="user">
    <h1>{{ user.email }}</h1>
    <button class="delete-button" v-on:click="onDeleteClick">
      Delete User
    </button>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    onDeleteClick(e) {
      var data = {
        id: this.user.id,
      };

      this.$emit("onListUserDeleteUser", data);
    },
  },
};
</script>

<style>
.user {
  position: relative;
}
.delete-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
