import React from 'react';
export const InputField = ({type, classs, name, placeholder, refs,label,error}) => {
 return (
    <div className="form-group">
     <label htmlFor="name">{label}</label>
     <input 
        type={type}
        className={classs}
        ref={refs} 
        name={name} 
        placeholder={placeholder} />
        {error[name] && <div className="error">{error[name].message}</div>}
    </div>
 );
}