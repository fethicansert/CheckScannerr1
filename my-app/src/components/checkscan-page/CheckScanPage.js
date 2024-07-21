import React, { useEffect, useRef, useState } from "react";
import ScannerDetails from "./ScannerDetail";
import CheckDetails from "./CheckDetails";
import CheckImage from "./checkImage/CheckImage";
import ScannedChecks from "./scanned-checks/ScannedChecks";
import placeHolderImage from '../../images/placeholder-image.png';
import CheckView from "./checkImage/CheckView";

import checkDataz from "../../data/checkdata";
import Overlay from "./checkImage/Overlay";

const CheckScanPage = () => {

    const checkData = checkDataz;

    const [currentIndex, setCurrentIndex] = useState(0)

    //CheckView in gosterilip gosterilmeyecegini belirten state
    const [isCheckView, setIsCheckView] = useState(false);

    //Okunma- yuklenme isleminin tamamlanip tamamlandigi belirten state
    const [isLoading, setIsLoading] = useState(false);

    //okunmus cekler
    const [scannedChecks, setScannedChecks] = useState([]);

    //cek sırası
    const [checkSequnce, setCheckSqeunce] = useState(0);

    //Ilk default cek icin data
    const [currentCheck, setCurrentCheck] = useState({
        checkSequnce: 0,
        routingNumber: '-',
        accountNumber: '-',
        checkNumber: '-',
        checkAmount: '-',
        checkImage: placeHolderImage
    });

    useEffect(() => {
        setCurrentIndex(currentCheck.checkSequnce - 1);
    },[currentCheck])

   
    const showCheckView = () => {
        setIsCheckView(!isCheckView);
    }

    //Cek okunurmus gibi yapmasi icin fonksiyon
    const checkScan = () => {
        const randomNum = Math.floor(Math.random() * 4);
        const newCurrentCheck = { ...checkData[randomNum], checkSequnce: checkSequnce + 1 };

        setIsLoading(true); //isLoading true yukleme islemi baslatildi spinner-loading goster

        
        setTimeout(() => {  //spinner-loading 2500ms gozukmesi icin isLoading degerini 2500ms sonra false yap
            setCheckSqeunce(checkSequnce + 1); //cek sirasi arttir
            setCurrentCheck(newCurrentCheck); //data ya check sqeunce properitsi ekle
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
                {/* Cek Okunduktan sonra cek bilgilerinin bulundugu component */}
                <ScannerDetails checkScan={checkScan} />
                
                {/* Cek Okunduktan sonra cek bilgilerinin bulundugu component */}
                <CheckDetails
                    isLoading={isLoading}
                    checksequence={currentCheck.checkSequnce}
                    routingNumber={currentCheck.routingNumber}
                    accountNumber={currentCheck.accountNumber}
                    checkNumber={currentCheck.checkNumber}
                    checkAmount={currentCheck.checkAmount}
                />

            </div>

            {/* Cek resminin ortalama bir boyutta gosterildigi copmonent  */}
            <CheckImage 
                isLoading={isLoading} 
                checkImage={currentCheck.checkImage} 
                showCheckImage={showCheckView} 
                setCurrentCheck={setCurrentCheck} 
                scannedChecks={scannedChecks}
                checkIndex={currentIndex}
            /> 

            {/* Okunmus ceklerin gosterildi tablo copmonent  */}
            <ScannedChecks setCurrentCheck={setCurrentCheckFromRow} scannedChecks={scannedChecks} />


            {/* Overlay copmonent  arka tarafi gölgelendirecek 
                CheckView copmonent  ceki daha buyuk boyutta ekranin ortasinda gosterecek */}
            {
                isCheckView &&
                <>
                    <CheckView checkImage={currentCheck.checkImage} />
                    <Overlay setIsCheckView={setIsCheckView} isCheckView={isCheckView} />
                </>
            }




        </main>
    );
}

export default CheckScanPage;