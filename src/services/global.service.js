import axios from 'axios';
const HttpRequest = axios.create({ baseURL:'http://localhost:3900/api/','Content-Type': 'application/json'});
//https://github.com/axios/axios

export const  PostRequest = (url, data)=>  HttpRequest.post(url, data);
export const  GetRequest =  (url)=>  HttpRequest.get(url);
export const  DeleteRequest = (url, data) =>  HttpRequest.delete(url, data);
export const  PutRequest = (url, data) =>  HttpRequest.put(url, data);

