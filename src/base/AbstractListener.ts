import axios from 'axios';

export abstract class AbstractListener {
  static async before() {
    // configure axios
    axios.defaults.timeout = 20000;
    axios.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return error.response;
      }
    );
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }
}
