import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link }  from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { InputField } from '../../../components/formComp/InputField';
import { formRule } from '../../../components/formComp/formRule';
import { userConstants } from './login.constants';
import { UiGlobalNotification } from '../../../components/notification/ui-global-notification';
import { FetchApi} from '../../../components/fetchApi';
import History from '../../../services/history';
const  { LOGIN_SUCCESS } = userConstants;


export const Login = (props) => {
  
  const { register, errors, handleSubmit, reset} = useForm({mode: 'onBlur'});
  const [ {data, isLoading, isError }, setData, setUrl]= FetchApi('/auth', {}, 'POST');
  const dispatch = useDispatch();
  let setError = data.error? data.message:isError.message
   
  if(!!data.token && Object.keys(data).length>0) {
    dispatch({type: LOGIN_SUCCESS, payload: data.token });
    props.history.push('/dashboard');
 }
  const onSubmit = (loginData,e) => {
   setData(loginData);
   setUrl('/notCall');
   e.target.reset(); 
  };


  return (
    <div className="col-md-12">
    <div className="d-flex justify-content-center">
     <div className="col-md-5 card p-5 mt-4">
       { setError &&   <UiGlobalNotification message={setError}/> }
       <form onSubmit={handleSubmit(onSubmit)}>
         <InputField 
            type="email" 
            classs="form-control"
            name="email"  
            placeholder="Enter email"
            label="Email"
            refs={register(formRule.email)}
            error={errors}
           />

          <InputField 
            type="password" 
            classs="form-control"
            name="password"  
            placeholder="Enter password"
            label="Password"
            refs={register(formRule.password)}
            error={errors}
            />
      <input type="submit"  value="Login" className="col-md-12 btn btn-primary"/>
      <p className="text-center mt-2"><Link  to="/register"> Don't Have account? Register! </Link></p>
      {
        !!isLoading && 
        <div  className="text-center mt-2"> <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>
      }
      
    </form>
    </div>
    </div>
    </div>
  );
};

