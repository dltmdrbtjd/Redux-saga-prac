import axios from 'axios';

export const loadPostAPI = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};
