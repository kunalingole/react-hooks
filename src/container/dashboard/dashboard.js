import React,{useEffect} from "react";
import {useSelector, useDispatch } from 'react-redux'
import { dashboardAction} from './dashboard.action'
export const Dashboard = () =>{
  const dispatch= useDispatch()
  const user = useSelector(state=>state);
  console.log(user);

  useEffect(() => {
    dispatch(dashboardAction());
  }, [dispatch]);


  return (
      <>
      <div><h2> Dashboard</h2></div>
      </>
  )
}