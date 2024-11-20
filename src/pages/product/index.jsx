// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {useState, useEffect} from 'react';
import "./style.css";
import {useParams} from "react-router-dom";
import {ShoppingCart} from "@phosphor-icons/react";
import {ApiInstance} from "../../services/api";
import {formatToMonetary} from "../../services/toMonetary";

function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [id, fetchProduct]);

    const fetchProduct = async () => {
        try {
            const response = await ApiInstance.get(`/Product/${id}`);
            setProduct(response);
        } catch (error) {
            console.log(error);
        }
    };

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
                                    <p style={{textDecoration: "line-through"}}>{formatToMonetary(product?.price)}</p>
                                    <h2>{formatToMonetary(product?.salePrice)}</h2>
                                </>
                            ) : (<h2>{formatToMonetary(product?.price)}</h2>)}
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
