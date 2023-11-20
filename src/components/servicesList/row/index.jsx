import React from "react";
import "./style.css";
import {ShoppingCart} from "@phosphor-icons/react";

function ServiceRow({title, price, imageLink, description}) {
    return (
        <div className="row">
            <div className="image-wrapper">
                <img src={imageLink} alt={title}/>
            </div>
            <div className="info-wrapper">
                <div className="service-title">
                    {title}
                </div>
                <div className="service-price">
                    {price}
                </div>
                <div className="service-description">
                    {description}
                </div>
                <div className="service-actions">
                    <button className="service-button">
                        Contratar
                        <ShoppingCart/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceRow;
