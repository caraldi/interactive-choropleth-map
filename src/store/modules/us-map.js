import * as types from '@/store/types'
// import * as d3 from 'd3'

const state = {
  data: [],
  width: '',
  height: '',
  center: [],
  loading: false,
  error: null
}

const getters = {

}

const mutations = {
  [types.SET_US_MAP_LOADING_STATUS]: state => (state.loading = !state.loading),
  [types.SET_US_MAP_DATA]: (state, payload) => (state.data === payload),
  [types.SET_US_MAP_ERROR]: state => state.error,
  /*
   * From the Flowing Data tutorial "Making an Interactive Map with Category Filters" by Nathan Yau
   * Source: flowingdata.com/2019/06/18/getting-started-with-d3/
   */
  [types.SET_US_MAP_ATTRIBUTES]: state => {
    /* Specify size of visualization and initialize variables */
    state.width = 960
    state.height = 600
    state.center = [state.width / 2, state.height / 2]

    d3.select('#us-map svg')
      .attr('width', state.width)
      .attr('height', state.height)
  }
}

const actions = {
  // [types.FETCH_US_MAP_DATA]: {

  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
