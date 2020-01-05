import React from "react";
export const Nav=()=>{
   return (
       <>
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="http://google.com">
              <i className="fa fa-home"></i> 
                Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://google.com">
            <i className="fa fa-file"></i>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://google.com">
            <i className="fa fa-shopping-cart"></i>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://google.com">
            <i className="fa fa-user"></i>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://google.com">
            <i className="fa fa-bar-chart-o"></i>
              Reports
            </a>
          </li>
        </ul>
      </div>
    </nav>
       </>
   )
}