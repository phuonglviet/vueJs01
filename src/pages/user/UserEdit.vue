<template>
  <div>
    <h1>VueRouter User Edit component</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ab,
      officiis voluptas quaerat ipsam doloremque? Odit mollitia facere placeat
      sunt. Enim mollitia tenetur aspernatur doloribus voluptates neque unde,
      est dicta!
    </p>
    <CompGlobal01 />
    <div>
      <v-text-field v-if="isMasked" :value="maskPass" @focus="handleFocus" />
      <!-- <v-text-field v-if="isMasked" :value="maskPassword" @focus="handleFocus" /> -->
      <v-text-field v-else v-model="currentValue" @blur="handleBlur" />
    </div>
    <div>
      <CompTestEventBusA/>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import { mask, TheMask } from "vue-the-mask";
// import { VueMaskDirective } from 'v-mask'
import MaskData from "maskdata";
import CompTestEventBusA from '@/eventBus/CompTestEventBusA.vue'

export default {
  name: "comp-footer",
  // directives: { VueMaskDirective },
  // Vue.directive('mask', VueMaskDirective),
  components: { 
    CompTestEventBusA 
  },
  data() {
    return {
      currentValue: "$#@TEST:U2VjcmV0S2V5MQ==:CLIENT-A",
      isMasked: true,
      customTokens: {
        pattern: "VVVV",
        formatCharacters: {
          V: {
            validate: (char) => /[a-zA-z]/.test(char),
            transform: (char) => char.toUpperCase(),
          },
        },
      },
    };
  },
  computed: {
    maskPass() {
      const maskPasswordOptions = {
        maskWith: "x",
        maxMaskedCharacters: 200, // To limit the output String length to 20.
        unmaskedStartCharacters: 4,
        // unmaskedEndCharacters: 9, // As last 9 characters of the secret key is a meta info which can be printed for debugging or other purpose
      };

      // const password = "$#@TEST:U2VjcmV0S2V5MQ==:CLIENT-A";
      const maskedPassword = MaskData.maskPassword(
        this.currentValue,
        maskPasswordOptions
      );
      return maskedPassword;
    },
    maskPassword() {
      const unmaskedStartCharacters = 4;
      let val = this.currentValue;
      if (!val) {
        return "";
      }

      if (val.length <= unmaskedStartCharacters) {
        return val;
      }

      let unmaskedCharacters = val.substring(0, unmaskedStartCharacters);
      let maskedCharacters = val.substring(unmaskedStartCharacters, val.length);
      return unmaskedCharacters + maskedCharacters;
    },
  },
  methods: {
    handleInput: function (event) {
      console.log("handleInput");
    },
    handleFocus: function (event) {
      console.log("handleFocus");
      this.isMasked = !this.isMasked;
    },
    handleBlur: function (event) {
      console.log("handleBlur");
      this.isMasked = !this.isMasked;
    },
    maskPassFunction: function (password) {
      const maskPasswordOptions = {
        maskWith: "x",
        maxMaskedCharacters: 200, // To limit the output String length to 20.
        unmaskedStartCharacters: 4,
        // unmaskedEndCharacters: 9, // As last 9 characters of the secret key is a meta info which can be printed for debugging or other purpose
      };

      // const password = "$#@TEST:U2VjcmV0S2V5MQ==:CLIENT-A";
      const maskedPassword = MaskData.maskPassword(
        password,
        maskPasswordOptions
      );
      return maskedPassword;
    },
  },
};
</script>

<style>
</style>