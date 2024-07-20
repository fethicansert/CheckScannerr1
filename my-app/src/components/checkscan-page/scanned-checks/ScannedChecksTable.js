import React from 'react'

const ScannedChecksTable = ({ tableHeaderItems, scannedCheckRows }) => {
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
