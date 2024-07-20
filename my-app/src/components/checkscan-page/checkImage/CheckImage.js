import React from "react";
import { MagnifyingGlass } from 'react-loader-spinner';

const CheckImage = ({ checkImage, isLoading, showCheckImage }) => {
    return (
        <div className="check-image-container">
            <h3>Çek Resmi</h3>


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

            <div className="check-image-flex">
                <button onClick={showCheckImage} className="check-image-button">Çeki Göster</button>
                <button onClick={showCheckImage} className="check-image-button">Çeki Göster</button>
                <button onClick={showCheckImage} className="check-image-button">Çeki Göster</button>
            </div>

        </div>


    )
};

export default CheckImage;