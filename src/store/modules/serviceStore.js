export default {
  namespaced: true,
  state: {
    categories: {
      category: []
      // title: ''
    },
    titles: {
      title: ''
    }
  },

  getters: {
    getCategories(state) {
      return state.categories;
    },
    getTitle(state) {
      return state.titles;
    }
  },

  mutations: {
    updateCategories(state, category) {
      const newCategories = {
        category
      };
      state.categories = newCategories;
      // const newTitle = {
      //   title
      // };
      // state.title = newTitle;
    },
    updateTitle(state, title) {
      const newTitles = {
        title
      };
      state.titles = newTitles;
    }
  },

  actions: {
    updateCategories({ commit }, { category }) {
      commit('updateCategories', category);
    },
    updateTitle({ commit }, { title }) {
      commit('updateTitle', title);
    }
  }
};
