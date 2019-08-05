import * as types from '@/store/types'
import client from 'api-client'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'

const state = {
  data: {},
  width: '',
  height: '',
  center: [],
  projection: {},
  path: {},
  loading: false,
  error: null
}

const getters = {

}

const mutations = {
  [types.SET_US_MAP_LOADING_STATUS]: state => (state.loading = !state.loading),
  [types.SET_US_MAP_DATA]: (state, payload) => (state.data = payload),
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
  },
  [types.APPLY_US_MAP_PROJECTION]: state => {
    /* Define projection */
    state.projection = d3.geoAlbersUsa()
      .scale(1280)
      .translate(state.center)

    /* Apply projection */
    state.path = d3.geoPath()
      .projection(state.projection)
  },
  [types.LOAD_US_COUNTIES]: state => {
    d3.select('#us-map svg g.us g.us__counties')
      .selectAll('path')
      .data(topojson.feature(state.data, state.data.objects.counties).features)
      .enter().append('path')
      .attr('d', state.path)
  },
  [types.LOAD_US_STATES]: state => {
    d3.select('#us-map svg g.us path.us__states')
      .datum(topojson.mesh(state.data, state.data.objects.states, (a, b) => a !== b))
      .attr('d', state.path)
  }
}

const actions = {
  [types.FETCH_US_MAP_DATA]: async (context) => {
    await client.fetchUsMapData()
      .then(response => {
        context.commit(types.SET_US_MAP_DATA, response)
        context.commit(types.SET_US_MAP_ATTRIBUTES)
        context.commit(types.APPLY_US_MAP_PROJECTION)
        context.commit(types.LOAD_US_COUNTIES)
        context.commit(types.LOAD_US_STATES)
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
