import React from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link }  from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginAction } from './register.action';
import { InputField } from '../../../components/formComp/InputField';
import { formRule } from '../../../components/formComp/formRule';

export const Register = (props) => {
  console.log(props);
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange"
  });
  const dispatch = useDispatch();
  const user = useSelector(state=>state);
  const onSubmit = data => {
   // console.log(JSON.stringify(data))
     dispatch(loginAction(data));
     console.log(user);
    
    // props.history.push('/dashboard')
  };

  return (
    <div className="col-md-12">
    <div className="d-flex justify-content-center">
     <div className="col-md-5 card p-5 mt-4">
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

      <input type="submit"  className="btn btn-primary"/>
      <Link  to="/login"> Register </Link>
    </form>
    </div>
    </div>
    </div>

  );
};

