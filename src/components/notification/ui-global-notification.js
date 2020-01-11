import React from 'react';
export const UiGlobalNotification = ({ message }) =>{
  return (
    <div className="alert alert-danger" role="alert">
      { message }
     </div>
  );
}