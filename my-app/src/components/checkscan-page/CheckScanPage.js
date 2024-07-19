import React, { useState } from "react";
import ScannerDetails from "./ScannerDetail";
import CheckDetails from "./CheckDetails";
import CheckImage from "./checkImage/CheckImage";
import ScannedChecks from "./scanned-checks/ScannedChecks";
import placeHolderImage from '../../images/placeholder-image.png';
import CheckView from "./checkImage/CheckView";

import checkDataz from "../../data/checkdata";

const CheckScanPage = () => {

    const checkData = checkDataz;
    const [isCheckView, setIsCheckView] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    //okunmus cekler
    const [scannedChecks, setScannedChecks] = useState([]);

    //cek sırası
    const [checkSequnce, setCheckSqeunce] = useState(0);

    //Ilk bos-õrnek cek icin data
    const [currentCheck, setCurrentCheck] = useState({
        checkSequnce: '-',
        routingNumber: '-',
        accountNumber: '-',
        checkNumber: '-',
        checkAmount: '-',
        checkImage: placeHolderImage
    });

    const showCheckView = () => {
        setIsCheckView(!isCheckView);
    }

    //Cek okunurmus gibi yapmasi icin fonksiyon
    const checkScan = () => {
        const randomNum = Math.floor(Math.random() * 4);
        const newCurrentCheck = { ...checkData[randomNum], checkSequnce: checkSequnce + 1 };

        setIsLoading(true); //isLoading true yukleme islemi baslatildi spinner-loading goster
        setCheckSqeunce(checkSequnce + 1); //cek sirasi arttir
        setCurrentCheck(newCurrentCheck); //data ya check sqeunce properitsi ekle

        setTimeout(() => {  //spinner-loading 2500ms gozukmesi icin isLoading degerini 2500ms sonra false yap
            setIsLoading(false);
            setScannedChecks([...scannedChecks, newCurrentCheck]);
        }, 1000);
    };

    const setCurrentCheckFromRow = (rowCheckData) => {
        
        setCurrentCheck(rowCheckData);
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

            <CheckImage isLoading={isLoading} checkImage={currentCheck.checkImage}  showCheckImage={showCheckView}/>

            <ScannedChecks setCurrentCheck={setCurrentCheckFromRow} scannedChecks={scannedChecks}/>

            {isCheckView && <CheckView  checkImage={currentCheck.checkImage}/>}

            <div className='overlay'></div>
        </main>
    );
}

export default CheckScanPage;