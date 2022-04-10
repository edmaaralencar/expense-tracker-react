import axios from 'axios'

const api = axios.create({
  baseURL: 'https://expense-tracker-back-node.herokuapp.com/api'
})


export { api }
