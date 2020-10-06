export default {
  namespaced: true,
  state: {
    products: {
      product: {}
    }
  },

  getters: {
    getProducts(state) {
      return state.products;
    }
  },

  mutations: {
    updateProducts(state, product) {
      const newProducts = {
        product
      };
      state.products = newProducts;
    }
  },

  actions: {
    updateProducts({ commit }, { product }) {
      commit('updateProducts', product);
    }
  }
};
