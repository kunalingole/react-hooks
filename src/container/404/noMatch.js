import React from 'react';

export const NoMatch = () =>{
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12 mt-5">
                <div className="d-flex justify-content-center"> 
                <div className="error-template col-md-6">
                    <h1 className="text-center">
                        Oops!</h1>
                    <h2 className="text-center">
                        404 Not Found</h2>
                    <div className="error-details text-center">
                        <h4> Sorry, an error has occured, Requested page not found!</h4>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}