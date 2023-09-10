
import Vue from 'vue';
import Vuex from 'vuex';

import verdict from './modules/verdict';
import judgement from './modules/judgement';
import project from './modules/project';
import markConfig from './modules/markConfig';
import user from './modules/user';

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
      judgement,
      project,
      markConfig,
      user
    }
  });
}
