const state = {
  main: {}
}

const mutations = {
  SIMPAN_USER: (state, user) => {
    state.main = user;
  }
}

export default {
  state,
  mutations
}
