
const verdict = {
  state: {
    isVerdictPage: false
  },
  mutations: {
    updateIsVerdictPage(state, payload) {
      state.isVerdictPage = payload;
    }
  },
  actions: {
    setIsVerdictPage({ commit }, params) {
      
      commit("updateIsVerdictPage", params);
    }
  },
  getters: {
    getIsVerdictPage(state) {
      return state.isVerdictPage;
    }
  },
};

export default verdict;
