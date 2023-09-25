import React from 'react';
import './style.css';
import ItemCard from "../../itemCard";

function ItemCollectionContent({itemCollection}) {

    return (
        <div className="content-wrapper">
            <div className="content-list">
                {itemCollection.map((item) => (
                    <ItemCard
                        title={item.title}
                        originalPrice={item.originalPrice}
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

