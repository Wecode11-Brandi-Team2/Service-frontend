export default {
  namespaced: true,
  state: {
    price: 1000
  },

  getters: {
    getPrice(state) {
      return state.price;
    }
  },

  mutations: {
    updatePrice(state, newPrice) {
      state.price = newPrice;
    }
  },

  actions: {
    updatePrice({ commit }, payload) {
      commit('updatePrice', payload);
    }
  }
};
