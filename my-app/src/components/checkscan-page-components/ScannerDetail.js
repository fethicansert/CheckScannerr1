import React from "react";



const ScannerDetails = () =>{
    return (
        <div className="scanner-details">
            <div className="scanner-details-flex">
                <h3 className="scanner-details-title">Çek Okuma</h3>
                
                <p>Check Status:<span className="check-status-text"> Ready</span></p>
            </div>


            <div className="scanner-details-flex">
                <button className="scan-button">
                    Çek Oku
                </button>

                <p>Check Scanner Type:<span className="check-status-text"> TS240</span></p>
            </div>
            

            
        </div>
    )
};

export default ScannerDetails;