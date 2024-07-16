import React from "react";
import ScannerDetails from "../checkscan-page-components/ScannerDetail";
import CheckDetails from "../checkscan-page-components/CheckDetails";
import CheckImage from "../checkscan-page-components/CheckImage";
import ScannedChecks from "../checkscan-page-components/ScannedChecks";



const CheckScanPage = () => {
    return (
        <main className="check-scan-page">

            <div className="check-scan-page-grid-flex-box check-scan-page-grid-item">
                <ScannerDetails />
                <CheckDetails />
            </div>

            <CheckImage />

            <ScannedChecks />
        </main>
    );
}

export default CheckScanPage;