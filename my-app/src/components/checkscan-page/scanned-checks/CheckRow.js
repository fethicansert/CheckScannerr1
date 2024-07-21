import React from "react";
import { v4 as uuid } from 'uuid';
import { useState } from "react";
const CheckRow = ({ check, setCurrentCheck}) => {

    console.log(check);
    const setSelectedRow = () => {
        setCurrentCheck(check);
    }

    const style = {
        background : check.isActive ? 'rgb(230,230,230)' : 'white'
    }

    return (
        <tr onClick={setSelectedRow} key={uuid()} style={style}>
            <td key={uuid()}>{check.checkSequnce}</td>
            <td key={uuid()}>{check.routingNumber}</td>
            <td key={uuid()}>{check.accountNumber}</td>
            <td key={uuid()}>{check.checkNumber}</td>
            <td key={uuid()}>{check.checkAmount}</td>
        </tr>
    );
}

export default CheckRow;