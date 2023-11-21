import React from 'react';
import {Card} from "antd";
import './style.css';
import {ShoppingCart} from "@phosphor-icons/react";
import {formatToMonetary} from "../../services/toMonetary";

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
                            {formatToMonetary(price)}
                        </p>
                        <p className='card-price'>
                            {formatToMonetary(salePrice)}
                        </p>
                    </>
                ) : (
                    <p className='card-price'>
                        {formatToMonetary(price)}
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

