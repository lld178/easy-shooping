
import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import user from '../store/user'
const requests = axios.create({
  baseURL: '/api',
  timeout:5000
})
requests.interceptors.request.use((c) => {
  if (user.state.token) {
    c.headers.token = user.state.token
  }
  nProgress.start()
  return c
})
requests.interceptors.response.use((r) => {
  nProgress.done()
  return r.data
}, (e) => {
  return Promise.reject(new Error('faile'))
})


export default requests