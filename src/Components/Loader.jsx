import React, {useState} from 'react';
import Loader from 'react-loader-spinner';

function LoadingIndicator () {
    
    const loadStyle={
                width: "100%",
                height: "75vh"
            };

    return (
            <div style={loadStyle} className="d-flex justify-content-center align-items-center">
                <Loader type="ThreeDots" color="#dc3545" height="150" width="150" />
            </div>
    );  
}

export default LoadingIndicator;