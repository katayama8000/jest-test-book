import axios from 'axios';

export default class User {
  static search() {
    return axios.get('/users').then((res) => res.data);
  }
}
