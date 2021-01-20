// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import { preset } from 'vue-cli-plugin-vuetify-preset-basil/preset'

Vue.use(Vuetify)

const opts = {}

// export default new Vuetify()
// export default new Vuetify(opts)

export default new Vuetify({
    theme: { dark: true },
  })