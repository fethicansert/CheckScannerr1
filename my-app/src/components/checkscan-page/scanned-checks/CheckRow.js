import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const CheckRow = ({ check, setCurrentCheck}) => {

    const [isHoveredRow, setIsHoveredRow] = useState(false);

    const setSelectedRow = () => {
        setCurrentCheck(check);
    }

    const style = {

        background: check.isActive ? 'rgb(230,230,230)': 'white'
        // boxShadow: check.isActive ? '0px 0px 1px 1px #015CA9 inset ' : 'white'
    }

    return (
        <tr className="check-row"  
            onClick={setSelectedRow} 
            key={uuid()} 
            style={style}>
            <td key={uuid()}>{check.checkSequnce}</td>
            <td key={uuid()}>{check.routingNumber}</td>
            <td key={uuid()}>{check.accountNumber}</td>
            <td key={uuid()}>{check.checkNumber}</td>
            <td key={uuid()}>{check.checkAmount}</td>
        </tr>
    );
}

export default CheckRow;