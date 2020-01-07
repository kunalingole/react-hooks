import React,{ useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link }  from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginAction } from './login.action';
import { InputField } from '../../../components/formComp/InputField';
import { formRule } from '../../../components/formComp/formRule';
import { userConstants } from './login.constants';
import  httpService from '../../../services/GlobalService';
import { UiGlobalNotification } from '../../../components/notification/ui-global-notification';
const  { LOGIN_SUCCESS } = userConstants;

export const Login = (props) => {
  const [formError,setFormError] = useState({'loading': false});
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange"
  });
  const dispatch = useDispatch();
   const onSubmit = (data) => {
   //dispatch(loginAction(data));
    setFormError({'loading': true});
      httpService.post('/auth', data)
       .then((res) =>{
        if(!!res.data.error){
          let error=res.data;
          error.loading = false;
          setFormError(error);
        } else {
          localStorage.setItem('user', res.data.token);
          dispatch({type: LOGIN_SUCCESS, payload: res.data});
          props.history.push('/dashboard');
        }
      })
      .catch(res=> {
       // setFormError(res);
        setFormError({'loading': true,'message':res});
    })
  };

  return (
    <div className="col-md-12">
    <div className="d-flex justify-content-center">
     <div className="col-md-5 card p-5 mt-4">
       { formError.message &&   <UiGlobalNotification message={formError}/> }
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
        !!formError.loading && 
        <div  className="text-center mt-2"> <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>
      }
      
    </form>
    </div>
    </div>
    </div>
  );
};

