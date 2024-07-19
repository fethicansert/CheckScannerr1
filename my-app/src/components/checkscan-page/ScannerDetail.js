import React from "react";



const ScannerDetails = ({checkScan}) =>{
    return (
        <div className="scanner-details">
            <div className="scanner-details-flex">
                <h3 className="scanner-details-title">Çek Okuma</h3>
                <p>Çek Okuyucu Durumu: <span className="check-status-text">Hazır</span></p>
            </div>


            <div className="scanner-details-flex">
                <button  onClick={checkScan} className="check-image-button">Çek Oku</button>
                <p>Çek Okuyucu Türü: <span className="check-scanner-type-text">DCC-TS240</span></p>
            </div>
            
        </div>
    )
};

export default ScannerDetails;