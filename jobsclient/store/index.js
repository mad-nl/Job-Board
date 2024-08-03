export const state = () => ({
  authenticated: false,
})

export const mutations = {
  setAuthenticated(state, status) {
    state.authenticated = status
  },
}

export const actions = {
  async checkAuth({ commit }) {
    try {
      const response = await this.$axios.$get('/api/auth/check')
      commit('setAuthenticated', response.authenticated)
    } catch (error) {
      commit('setAuthenticated', false)
    }
  },
}