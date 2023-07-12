import axios from 'axios';
import { AppDispatchType } from '.';
import { API_URL } from '..';
import { setDataAlbums } from './albums/albumsSlice';
import { setDataPosts } from './posts/postsSlice';
import { setDataUsers } from './users/usersSlice';

export const getUsers = () => {
  return function(dispatch: AppDispatchType) {
      axios.get(`${API_URL}/users`)
          .then(res => res.data)  
          .then(data => dispatch(setDataUsers(data)))
          .catch(e => console.log(e))
  }
}

export const getPosts = () => {
  return function(dispatch: AppDispatchType) {
      axios.get(`${API_URL}/posts`)
          .then(res => res.data)  
          .then(data => dispatch(setDataPosts(data)))
          .catch(e => console.log(e))
  }
}

export const getAlbums = () => {
  return function(dispatch: AppDispatchType) {
      axios.get(`${API_URL}/albums`)
          .then(res => res.data)  
          .then(data => dispatch(setDataAlbums(data)))
          .catch(e => console.log(e))
  }
}
