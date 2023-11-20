import React, {useState, useEffect} from 'react';
import {storeItems} from "../../data/storeItems/items";
import "./style.css";
import {useParams} from "react-router-dom";
import {ShoppingCart} from "@phosphor-icons/react";

function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = storeItems.find(item => item.id === Number(id));
        setProduct(foundProduct);
    }, [id]);

    return (
        <div className="product-container">
            <div className="product-header">
                <h2>{product?.title}</h2>
            </div>
            <div className="product-body">
                <div className="product-image">
                    <img src={product?.imageLink} alt={product?.title}/>
                </div>
                <div className="product-details">
                    <div className="product-row">
                        <div className="product-description">
                            {product?.hasOffer ? (
                                <>
                                    <p style={{textDecoration: "line-through"}}>{product?.price}</p>
                                    <h2>{product?.salePrice}</h2>
                                </>
                            ) : (<h2>{product?.price}</h2>)}
                        </div>
                        <div className="purchase-button">
                            <button><ShoppingCart/>  Comprar</button>
                        </div>
                    </div>
                    <div className="product-description">
                        {product?.ammount > 0 ? (
                            <>
                                <h4>Em estoque:</h4>
                                <h6>{product?.ammount} disponíveis</h6>
                            </>
                        ) : (<h4>Produto indisponível</h4>)}

                    </div>

                    <div className="product-description">
                        <h4>Descrição</h4>
                        <p>{product?.description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductPage;
