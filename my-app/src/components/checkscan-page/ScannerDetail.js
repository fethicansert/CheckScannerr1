import React from "react";



const ScannerDetails = ({checkScan}) =>{
    return (
        <div className="scanner-details">
            <div className="scanner-details-flex">
                <h3 className="scanner-details-title">Çek Okuma</h3>
                <label>Çek Okuyucu Durumu: <span className="check-status-text">Hazır</span></label>
            </div>


            <div className="scanner-details-flex">
                <button  onClick={checkScan} className="check-image-button">Çek Oku</button>
                <label>Çek Okuyucu Türü: <span className="check-scanner-type-text">DCC-TS240</span></label>
            </div>
            
        </div>
    )
};

export default ScannerDetails;