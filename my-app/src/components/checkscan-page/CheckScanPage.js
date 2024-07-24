import React, { useEffect, useRef, useState } from "react";
import ScannerDetails from "./ScannerDetail";
import CheckDetails from "./CheckDetails";
import CheckImage from "./checkImage/CheckImage";
import ScannedChecks from "./scanned-checks/ScannedChecks";
import placeHolderImage from '../../images/placeholder-image.png';
import CheckView from "./checkImage/CheckView";

import fakeCheckData from "../../data/checkdata";
import Overlay from "./checkImage/Overlay";

import useAuth from "../../hooks.js/useAuth";

const CheckScanPage = () => {

    const { auth } = useAuth();
    
    const checkData = fakeCheckData;

    const checkSequnceReverse = useRef(false);

    const checkAmountReverse = useRef(false);

    //Tablo daki indexi tutabilmek currentIndex degeri
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
        checkImage: placeHolderImage,
        isActive: false
    });

    ///currentCheck her degistiginde currentIndex de degisecek
    useEffect(() => {
        let currentindex;
        scannedChecks.forEach((item, index) => {
            if (item.checkSequnce === currentCheck.checkSequnce) {
                currentindex = index;
            }
        });
        setCurrentIndex(currentindex);
    }, [currentCheck, scannedChecks])

    //currentcheck her degistiginde currentcheck isActive(seçilmiş çek) true geri kalanlar false olacak
    useEffect(() => {

        const updatedChecks = scannedChecks.map(check => {
            if (check.checkSequnce === currentCheck.checkSequnce) {
                check.isActive = true
            } else {
                check.isActive = false
            }
            return check;
        });

        setScannedChecks(updatedChecks);

    }, [currentCheck]);

    //cekin ekranin ortasinda buyuk bir sekilde gozukmesi
    const showCheckView = () => {
        setIsCheckView(!isCheckView);
    }

    //Cek okunma taklidi yap
    const checkScan = () => {
        const randomNum = Math.floor(Math.random() * 4);
        const newCurrentCheck = { ...checkData[randomNum], checkSequnce: checkSequnce + 1, isActive: false };

        setIsLoading(true); //isLoading true yukleme islemi baslatildi spinner-loading goster

        setTimeout(() => {  //spinner-loading 2500ms gozukmesi icin isLoading degerini 2500ms sonra false yap
            setCheckSqeunce(checkSequnce + 1); //cek sirasi arttir
            setCurrentCheck(newCurrentCheck); //data ya check sqeunce properitsi ekle
            setIsLoading(false);
            if (!checkSequnceReverse.current) {
                setScannedChecks([...scannedChecks, newCurrentCheck]);
            } else {
                setScannedChecks([newCurrentCheck, ...scannedChecks,]);
            }

        }, 1000);

    };

    const setCurrentCheckFromRow = (rowCheckData) => {
        setCurrentCheck(rowCheckData);
    };

    return (
        <div className="wrapper">
            <main className="check-scan-page">


                <div className="check-scan-page-grid-flex-box check-scan-page-grid-item">
                    {/* Cek Okunduktan sonra cek bilgilerinin bulundugu component */}
                    <ScannerDetails checkScan={checkScan} scannedCheckCount={checkSequnce} />

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
                <ScannedChecks
                    checkSequnceReverse={checkSequnceReverse}
                    setCurrentCheck={setCurrentCheckFromRow}
                    scannedChecks={scannedChecks}
                    setScannedChecks={setScannedChecks}
                />


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
        </div>
    );
}

export default CheckScanPage;