import React from "react";
import { v4 as uuid } from 'uuid';
import CheckRow from "./CheckRow";



const ScannedChecks = ({ scannedChecks, setCurrentCheck }) => {

    const tableHeaderNames = ['check sequence', 'routing number', 'acount number', 'check number', 'check amount'];

    const tableHeaderItems = tableHeaderNames.map(name => <th key={uuid()}>{name}</th>)

    const scannedCheckRows = scannedChecks.map(check => <CheckRow setCurrentCheck={setCurrentCheck} check={check} />);

    return (
        <div className="scanned-checks ">
            <h3 className="scanned-check-title">Okunmus Çekler</h3>
            <div className="table-wrapper">
                <table className="scanned-checks-table">
                    <tbody>
                        <tr className="header-row">
                            {tableHeaderItems}
                        </tr>

                        {scannedCheckRows}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScannedChecks;