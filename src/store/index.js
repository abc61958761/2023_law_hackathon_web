
  import Vue from 'vue';
import Vuex from 'vuex';

import verdict from './modules/verdict';
import judgment from './modules/judgment';

Vue.use(Vuex);

/**
 * CreateStore - Function to create store.
 *
 * @returns {Object}  Description.
 */
export function createStore() {
  return new Vuex.Store({
    modules: {
      verdict,
      judgment
    }
  });
}
