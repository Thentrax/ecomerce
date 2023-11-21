import React, { useState, useEffect } from "react";
import ServiceRow from "./row";
import "./style.css";
import { ApiInstance } from "../../services/api";

function StoreServicesList() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await ApiInstance.get("/Service");
            setServices(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="items-wrapper">
            <div className="services-header">
                <h1> Serviços </h1>
            </div>
            {
                services.map((item) => (
                    <ServiceRow
                        title={item.title}
                        price={item.price}
                        imageLink={item.imageLink}
                        description={item.description}
                        salePrice={item.salePrice}
                        hasOffer={item.hasOffer}
                    />
                ))
            }
        </div>
    );
}

export default StoreServicesList;
