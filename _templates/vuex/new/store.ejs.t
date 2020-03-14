---
to: <%= directory %>/<%= name %>.js
---
export const state = () => ({
  data: []
});

export const mutations = {
  update(state, payload) {
    state.data = payload;
  },
  clear(state) {
    state.data = [];
  }
};
