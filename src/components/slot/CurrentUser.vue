<template>
  <div class="currentUserComp">
    <div class="card-content">
      <slot :userNm="userData"> {{ userData.firstName }} </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "current-user",
  data() {
    return {
      userData: {
        firstName: "Marry",
        lastName: "Ann Toony",
      },
      headerContent: "đây là nội dung header của Current User",
    };
  },
  props: {
    
  },
};
</script>

<style>
</style>