import axios from 'axios';
import queryString from 'query-string';


const API_URL = 'http://localhost:3000';

const options = {
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json'
    },
  };


const axiosRequest = axios.create(options);

export function getSuggestions() {
    return axiosRequest.get('/suggestions');
  }


  export function search(data) {

    const query = queryString.stringify({
      city_id: data.type === 'city' ? data.id : undefined,
      establishment_id: data.type === 'establishment' ? data.id : undefined,
    });
    return axiosRequest.get(`/search?${query}`);
  }
  

export function postUser(data) {
  return axiosRequest.post(`/user`, data);
}

export function postProvider(data) {
  return axiosRequest.post(`/provider`, data);
}


export function postEstablishment(data) {
  return axiosRequest.post(`/establishment`, data);
}


export function getEstablishment(id) {
  const query = queryString.stringify({
    provider_id: id,
  });
  return axiosRequest.get(`/establishment?${query}`);
}

export function postProduct(data) {
  return axiosRequest.post(`/product`, data);
}


export function getProduct(id) {
  const query = queryString.stringify({
    provider_id: id,
  });
  return axiosRequest.get(`/product?${query}`);
}


export function postAnnonce(data) {
  return axiosRequest.post(`/annonce`, data);
}


export function getAnnonce(id) {
  const query = queryString.stringify({
    provider_id: id,
  });
  return axiosRequest.get(`/annonce?${query}`);
}


export function putProvider(data) {
  return axiosRequest.put(`/provider`, data);
}


export function postDiscussion(data) {
  return axiosRequest.post(`/discussion`, data);
}

export function connect(data) {
  return axiosRequest.post(`/connect`, data);
}

