import React from 'react';
export const UiGlobalNotification = (props) =>{
  return (
    <div className="alert alert-danger" role="alert">
      { props.message.message }
     </div>
  );
}