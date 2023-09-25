import React from 'react';
import {Card} from "antd";
import './style.css';
import {ShoppingCart} from "@phosphor-icons/react";

function ItemCard({title, originalPrice, price, imageLink}) {
    return (
        <Card
            hoverable
            cover={<img alt="rtx3060"
                        src={imageLink}/>}
            className='card'
        >
            <h3 className='card-title'>
                {title}
            </h3>
            <p className='card-original-price'>
                {originalPrice}
            </p>
            <p className='card-price'>
                {price}
            </p>
            <div
                className='card-button'
            >
                <ShoppingCart/>
                Comprar
            </div>
        </Card>

    );
}

export default ItemCard;

