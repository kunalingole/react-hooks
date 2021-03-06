import React from 'react';
import { Nav } from './nav';
export const Layout = (props) =>{
  const { Component } = props;
    return (
        <>
        <Nav/>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
             <Component/>
           </div>
         </main>
        </>
    )
}