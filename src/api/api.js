import axios from 'axios'

export default {
  getUserInfo(params) {
    return axios.post('/user/getUserInfo', { params })
  },
}