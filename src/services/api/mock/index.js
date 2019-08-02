import us from '@/services/api/mock/data/us'

const fetch = (promise, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(promise))
  }, time)
}

export default {
  fetchUsMapData () {
    return Promise(fetch(us, 1000))
  }
}
