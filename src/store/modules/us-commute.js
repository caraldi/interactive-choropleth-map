import * as types from '@/store/types'
import client from 'api-client'
import * as d3 from 'd3'

const state = {
  data: [],
  selected: 'HC01_EST_VC04'
}

const getters = {
  getSelectedCommuteCategory: state => state.selected
}

const mutations = {
  [types.SET_US_COMMUTE_DATA]: (state, payload) => (state.data = payload),
  [types.APPLY_COLOR_SCALE_TO_FILTERED_COMMUTE_DATA]: (state, commuteData) => {
    const colorScale = d3.scaleLinear()
      /* Creates linear scale from 0 to 100 that translates from white to rgb(141,211,199) */
      .domain([0, 100])
      .range(['#ffffff', '#8dd3c7'])
      /*
       * Interpolates shades in between the two color points to create palette of colors within
       * the range of perceivable colors in the Lab color space
       */
      .interpolate(d3.interpolateLab)

    /* Test FIPS: 2185 North Slope, AK */
    console.log('FIPS2185: North Slope, AK ', colorScale(18.7))

    commuteData.forEach(function (county) {
      d3.select('path#FIPS' + county.FIPS)
        .datum(county)
        .attr('fill', function (d) { return colorScale(d.HC01_EST_VC04) })
    })
  }
}

const actions = {
  [types.FETCH_US_COMMUTE_DATA]: async (context) => {
    await client.fetchUsCommuteData()
      .then(response => {
        context.commit(types.SET_US_COMMUTE_DATA, response)
        context.commit(types.APPLY_COLOR_SCALE_TO_FILTERED_COMMUTE_DATA, state.data)
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
