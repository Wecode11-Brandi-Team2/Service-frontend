export default {
  namespaced: true,
  state: {
    categories: {
      category: []
    },
    titles: {
      title: ''
    },
    accesses: {
      access: ''
    },
    phones: {
      phone: 0
    }
  },

  getters: {
    getCategories(state) {
      return state.categories;
    },
    getTitle(state) {
      return state.titles;
    },
    getAccess(state) {
      return state.accesses;
    },
    getPhone(state) {
      return state.phones;
    }
  },

  mutations: {
    updateCategories(state, category) {
      const newCategories = {
        category
      };
      state.categories = newCategories;
    },
    updateTitle(state, title) {
      const newTitles = {
        title
      };
      state.titles = newTitles;
    },
    updateAccess(state, access) {
      const newAccess = {
        access
      };
      state.accesses = newAccess;
    },
    updatePhone(state, phone) {
      const newPhone = {
        phone
      };
      state.phones = newPhone;
    }
  },

  actions: {
    updateCategories({ commit }, { category }) {
      commit('updateCategories', category);
    },
    updateTitle({ commit }, { title }) {
      commit('updateTitle', title);
    },
    updateAccess({ commit }, { access }) {
      commit('updateAccess', access);
    },
    updatePhone({ commit }, { phone }) {
      commit('updatePhone', phone);
    }
  }
};
