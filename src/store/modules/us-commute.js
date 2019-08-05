import * as types from '@/store/types'
import client from 'api-client'
// import * as d3 from 'd3'

const state = {
  data: []
}

const getters = {

}

const mutations = {
  [types.SET_US_COMMUTE_DATA]: (state, payload) => (state.data = payload)
}

const actions = {
  [types.FETCH_US_COMMUTE_DATA]: async (context) => {
    await client.fetchUsCommuteData()
      .then(response => {
        context.commit(types.SET_US_COMMUTE_DATA, response)
      })
      .catch(error => context.commit(types.SET_US_MAP_ERROR, error.message))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
