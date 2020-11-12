<template>
  <div class="comp-tabs">
      <div class="tab-title">
          <span>{{ title }}</span>
          <i class="icon ion-md-aperture"></i>
      </div>
      <div class="tab-body">
          <slot/>
      </div>

  </div>
</template>

<script>
export default {
    name: 'comp-tab',
    props: {
        title: String
    },
    data() {
        return {

        }
    }

}
</script>

<style>
    .tab-title
    {
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        border:2px solid #000;
    }
    .tab-header {
        margin:0;
        padding:0;
        display:flex;
        list-style-type: none;
    }
    .tab-header li {
        padding: 8px 15px;
        background-color: #ccc;
        transition: all .3s ease;
    }
    .tab-header li:hover {
        color: #fff;
        background-color: #333;
    }
    .tab-body{
        margin-top:5px;
        padding:2px;
        border: 2px solid blue;
    }
    .tab-content {
        padding: 15px;
        border: 2px solid green;
        text-align: left;
    }
    .active {
        color:#fff;
        background-color:chocolate;
    }
</style>