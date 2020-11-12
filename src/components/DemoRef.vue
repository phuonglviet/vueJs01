<template>
  <div class="demo-ref">
      <h1>Demo reference</h1>
      <input type="file" style="display:none" ref="fileInputAvatar"/>
      <button class="avatar" v-on:click="btnAvatarOnClick">Thay doi avatar</button>
  </div>
</template>

<script>
export default {
    name: "demo-ref",
    data() {
        return {

        }
    },
    methods:{
        btnAvatarOnClick(e) {
            this.$refs.fileInputAvatar.click();
        }
    }
}
</script>

<style>
    .demo-ref {
        margin-top: 10px;
        padding: 10px 10px;
        border: 1px solid #000;
    }
    .avatar {
        color: #fff;
        border: 2px solid #333;
        padding: 10px 10px;
        background-color: #333;
        transition: all .3s ease;
    }

    .avatar:hover{
        color: #333;
        background-color: #fff;
    }
</style>