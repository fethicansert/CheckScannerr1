import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import CheckRow from "./CheckRow";

const ScannedChecksTable = ({ scannedChecks, setCurrentCheck }) => {

    //headerNames
    const tableHeaderNames = ['check sequence', 'routing number', 'acount number', 'check number', 'check amount'];

    //Table Header Items
    const tableHeaderItems = tableHeaderNames.map(name => <th key={uuid()}>{name}</th>)

    //Table Scanned Checks Items
    const scannedCheckRows = scannedChecks.map(check => <CheckRow key={uuid()} setCurrentCheck={setCurrentCheck} check={check} />);

    return (
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
    )
}

export default ScannedChecksTable
