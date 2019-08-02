import axios from 'axios'

export default {
  fetchUsMapData () {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data)
      .catch(error => console.warn(error))
  }
}
