import React from "react";
import { v4 as uuid } from 'uuid';

const CheckRow = ({ check, setCurrentCheck}) => {
    return (
        <tr onClick={() => setCurrentCheck(check)} key={uuid()}>
            <td key={uuid()}>{check.checkSequnce}</td>
            <td key={uuid()}>{check.routingNumber}</td>
            <td key={uuid()}>{check.accountNumber}</td>
            <td key={uuid()}>{check.checkNumber}</td>
            <td key={uuid()}>{check.checkAmount}</td>
        </tr>
    );
}

export default CheckRow;