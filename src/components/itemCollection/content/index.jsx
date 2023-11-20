import React from 'react';
import './style.css';
import ItemCard from "../../itemCard";

function ItemCollectionContent({itemCollection}) {

    return (
        <div className="content-wrapper">
            <div className="content-list">
                {itemCollection.map((item) => (
                    <ItemCard
                        id={item.id}
                        title={item.title}
                        salePrice={item.salePrice}
                        price={item.price}
                        hasOffer={item.hasOffer}
                        imageLink={item.imageLink}
                    />
                ))}
            </div>
        </div>

    );
}

export default ItemCollectionContent;

