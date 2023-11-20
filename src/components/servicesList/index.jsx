import React from "react";
import {storeServices} from "../../data/storeServices/items";
import ServiceRow from "./row";
import "./style.css";

function StoreServicesList() {
    return (
        <div className="items-wrapper">
            <div className="services-header">
                <h1> Serviços </h1>
            </div>
            {
                storeServices.map((item) => (
                    <ServiceRow
                        title={item.title}
                        price={item.price}
                        imageLink={item.imageLink}
                        description={item.description}
                    />
                ))
            }
        </div>
    );
}

export default StoreServicesList;
