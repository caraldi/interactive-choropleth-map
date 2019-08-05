import usMapData from '@/services/api/mock/data/us-map'
import usCommuteData from '@/services/api/mock/data/us-commute'

const fetch = (promise, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(promise))
  }, time)
}

export default {
  fetchUsMapData () {
    return fetch(usMapData, 1000)
  },
  fetchUsCommuteData () {
    return fetch(usCommuteData, 1000)
  }
}
