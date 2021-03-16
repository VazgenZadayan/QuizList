import axios from 'axios'

export default axios.create({
  baseURL: 'https://reac-quiz-78e97-default-rtdb.firebaseio.com/'
})