import axios from 'axios';

export const fetchItems = (query = ' ', page = 1) => {
  const key = '14434329-dadff0c139e9bcb546c4a6d4b';
  const path = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(path);
};

export const yo = () => {};
