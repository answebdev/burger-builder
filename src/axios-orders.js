import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-76228-default-rtdb.firebaseio.com/',
});

export default instance;
