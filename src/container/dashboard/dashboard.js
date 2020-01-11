import React,{ useState }  from "react";
import { useDispatch } from 'react-redux';
import { FetchApi } from '../../components/fetchApi';
import {constDashboard} from './dashboard.constants';
import { UiGlobalNotification } from '../../components/notification/ui-global-notification';

export const Dashboard = () =>{
  const dispatch = useDispatch();
  const [ {data, isLoading, isError }]= FetchApi('/movies',{'request':'movies '}, 'GET');
  console.log(data);


  if(!isError && Object.keys(data).length>0) {
    dispatch({type: constDashboard.SUCCESS_MOVIES, payload: data });
 }

  return (
      <>
       { isError.message &&   <UiGlobalNotification message={isError}/> }
       {
        !!isLoading && 
        <div  className="text-center mt-2"> <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>
      }
      <div><h2> Dashboard</h2></div>
      </>
  )
}