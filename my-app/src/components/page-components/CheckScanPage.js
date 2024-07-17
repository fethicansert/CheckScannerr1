import React, { useState } from "react";
import ScannerDetails from "../checkscan-page-components/ScannerDetail";
import CheckDetails from "../checkscan-page-components/CheckDetails";
import CheckImage from "../checkscan-page-components/CheckImage";
import ScannedChecks from "../checkscan-page-components/ScannedChecks";
import placeHolderImage from '../../images/placeholder-image.png';

import  checkDataz  from "../../data/checkdata";

const CheckScanPage = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [checkSequnce, setCheckSqeunce] = useState(0);
    const [currentCheck, setCurrentCheck] = useState({
        routingNumber: '-',
        accountNumber: '-',
        checkNumber: '-',
        checkAmount: '-',
        checkImage: placeHolderImage
    });

    const checkData = checkDataz;

    const checkScan = () => {
        setIsLoading(true);
        setCheckSqeunce(prev => prev + 1);
        setCurrentCheck({...checkData[checkSequnce],checkSequnce:checkSequnce + 1});
        setTimeout(()=> {
            setIsLoading(false);
        },2500)
    };


    return (
        <main className="check-scan-page">

            <div className="check-scan-page-grid-flex-box check-scan-page-grid-item">
                <ScannerDetails checkScan={checkScan} />

                <CheckDetails
                    isLoading={isLoading}
                    checksequence={currentCheck.checkSequnce}
                    routingNumber={currentCheck.routingNumber}
                    accountNumber={currentCheck.accountNumber}
                    checkNumber={currentCheck.checkNumber}
                    checkAmount={currentCheck.checkAmount}
                />


            </div>

            <CheckImage  isLoading={isLoading} checkImage={currentCheck.checkImage}/>

            <ScannedChecks />
        </main>
    );
}

export default CheckScanPage;