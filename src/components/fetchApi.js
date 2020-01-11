import React, { useState, useEffect } from 'react';
import { PostRequest, GetRequest, DeleteRequest, PutRequest } from '../services/global.service';

const  apiRequestType = (requestType) =>{
 switch(requestType){
     case "POST" :
         return PostRequest;
      case "GET":
          return GetRequest;
      case "DELETE":
          return DeleteRequest;
        default:
            return PutRequest;

 }
}
export const FetchApi = (initialUrl, initialData, requestType) => {
  let Method = apiRequestType(requestType);
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    let didCancel = false;
    const fetchData = async() => {
            setIsLoading(true);
            try {
                const response = await Method(initialUrl,data);
                if (!didCancel) {
                 setData(response.data);
                }
            }
            catch(e){
                if (!didCancel) {
                setIsError(e);
                setIsLoading(false);
                }
            }  
    };
    
    if(Object.keys(data).length>0){
        fetchData();
    }
    return () => {
        didCancel = true;
        setUrl('');
      };
    },[url])
  
 return [{ data, isLoading, isError },setData,setUrl];
}