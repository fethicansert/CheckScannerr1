import React from "react";
import { Bars } from "react-loader-spinner";


const ScannerDetails = ({ checkScan, scannedCheckCount, isLoading }) => {
    return (
        <div className="scanner-details-container">
            <div className="scanner-details-flex">
                <h3 className="check-scan-page-sub-title">Çek Okuyucu Bilgieri</h3>
                <button onClick={checkScan} className="check-scan-button">Çek Oku</button>
            </div>

            <div className="scanner-details-flex">

                <label
                    className="check-detail-label">
                    Çek Okuyucu Durumu:
                    {
                        isLoading
                    }
                </label>

                <label className="check-detail-label">Çek Okuyucu Türü: <span className="check-scanner-type-text">DCC-TS240</span></label>
                <label className="check-detail-label">Okunan Çek Sayısı: <span className="check-scanner-type-text">{scannedCheckCount}</span></label>
            </div>

        </div>
    )
};

export default ScannerDetails;