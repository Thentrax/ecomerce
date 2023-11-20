import React from 'react';
import {Card} from "antd";
import './style.css';
import {ShoppingCart} from "@phosphor-icons/react";

function ItemCard({id, title, price, salePrice, hasOffer, imageLink}) {
    return (
        <a
            href={`/product/${id}`}
            style={{textDecoration: "none", color: "black"}}
        >
            <Card
                hoverable
                cover={<img alt={title} src={imageLink}/>}
                className='card'
            >
                <h3 className='card-title'>
                    {title}
                </h3>
                { hasOffer ? (
                    <>
                        <p className='card-original-price'>
                            {price}
                        </p>
                        <p className='card-price'>
                            {salePrice}
                        </p>
                    </>
                ) : (
                    <p className='card-price'>
                        {price}
                    </p>
                )}
                <div className='card-button'>
                    <ShoppingCart/>
                    Comprar
                </div>
            </Card>
        </a>

    );
}

export default ItemCard;

