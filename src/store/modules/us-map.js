import * as types from '@/store/types'
// import * as d3 from 'd3'

const state = {
  data: [],
  loading: false,
  error: null
}

const getters = {

}

const mutations = {
  [types.SET_US_MAP_LOADING_STATUS]: state => (state.loading = !state.loading),
  [types.SET_US_MAP_DATA]: (state, payload) => (state.data === payload),
  [types.SET_US_MAP_ERROR]: state => state.error,
  [types.INITIALIZE_US_MAP_VARS]: state => {
    /*
     * From the Flowing Data tutorial "Making an Interactive Map with Category Filters" by Nathan Yau
     * Source: flowingdata.com/2019/06/18/getting-started-with-d3/
     */

    /* Specify size of visualization and initialize variables */
    // const width = 960
    // const height = 600
    // const center = [width / 2, height / 2]
    // const defaultFillColor = '#e0e0e0'

    // const commuteById = d3.map()

    /* Define projection */
    // const usProjection = d3.geoAlbersUsa()
    //   .scale(1280)
    //   .translate([width / 2, height / 2])

    /* Apply projection */
    // const path = d3.geoPath()
    //   .projection(usProjection)

    /* Create an svg object */
    // const svg = d3.select('#us-map')
    //   .append('svg')
    //   .attr('width', width)
    //   .attr('height', height)

    // const g = svg.append('g')
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
