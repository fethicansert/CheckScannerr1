import React from "react";
import { v4 as uuid } from 'uuid';
import CheckRow from "./CheckRow";
import ScannedChecksTable from "./ScannedChecksTable";



const ScannedChecks = ({ scannedChecks, setCurrentCheck }) => {

    //headerNames
    const tableHeaderNames = ['check sequence', 'routing number', 'acount number', 'check number', 'check amount'];

    //Table Header Items
    const tableHeaderItems = tableHeaderNames.map(name => <th key={uuid()}>{name}</th>)

    //Table Scanned Checks Items
    const scannedCheckRows = scannedChecks.map(check => <CheckRow setCurrentCheck={setCurrentCheck} check={check} />);

    return (
        <div className="scanned-checks ">

            <h3 className="scanned-check-title">Okunmus Çekler</h3>

            <ScannedChecksTable tableHeaderItems={tableHeaderItems} scannedCheckRows={scannedCheckRows} />

        </div>
    );
};

export default ScannedChecks;