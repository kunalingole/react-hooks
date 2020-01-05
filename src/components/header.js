import React from "react";
export const Header=()=>{
   return (
       <>
       <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="http://google.com">HSBC</a>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
            <a className="nav-link" href="http://google.com">Sign out</a>
            </li>
        </ul>
        </nav>
       </>
   )
}