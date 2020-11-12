<template>
  <div class="list-user">
    <user class="user" v-for="user in listUser" v-bind:key="user.id" v-bind:user="user" v-on:onListUserDeleteUser="listUserDeleteUserEvent"
    />
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  name: "list-user",
  props: {
    listUser: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  components: {
    User,
  },
  methods: {
    listUserDeleteUserEvent(data) {
      this.$emit('onAppDeleteUser', data);
    }
  }
};
</script>

<style>
  .list-user {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list-user .user {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #333;
    width:calc(33.3333% - 20px)
  }
</style>