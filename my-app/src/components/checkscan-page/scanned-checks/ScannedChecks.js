import React from "react";
import ScannedChecksTable from "./ScannedChecksTable";



const ScannedChecks = ({ scannedChecks, setCurrentCheck }) => {

  
    return (
        <div className="scanned-checks ">

            <h3 className="scanned-check-title">Okunmus Çekler</h3>

            <ScannedChecksTable 
                scannedChecks={scannedChecks} 
                setCurrentCheck={setCurrentCheck}
            />

        </div>
    );
};

export default ScannedChecks;