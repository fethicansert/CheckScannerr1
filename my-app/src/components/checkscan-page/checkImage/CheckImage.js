import React from "react";
import { RotatingSquare, MagnifyingGlass } from 'react-loader-spinner'
const CheckImage = ({ checkImage, isLoading }) => {
    return (
        <div className="check-image-container">
            <div className="check-image-flex">
                <h3>Çek Resmi</h3>
                <button className="check-image-button">Çeki Göster</button>
            </div>
            
            {
                !isLoading
                    ? <img className="check-image" src={checkImage}></img>
                    : <MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="magnifying-glass-loading"
                        wrapperStyle={{}}
                        wrapperClass="magnifying-glass-wrapper spinner"
                        glassColor="#c0efff"
                        color="#e15b64"
                    />
            }

        </div>
    )
};

export default CheckImage;