import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      scrollToTop: false,
    }
  },
  getters: {
    getCount(state) {
      return state.count;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    triggerScrollToTop(state) {
        state.scrollToTop = !state.scrollToTop;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    decrement(context) {
      context.commit('decrement');
    }
  }
});

export default store;
