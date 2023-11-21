import { useState, useEffect } from "react";
import ItemCollectionHeader from "./header";
import ItemCollectionContent from "./content";
import {ApiInstance} from "../../services/api";

function ItemCollection({hasOffer, title}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        ApiInstance.get("/Product")
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const filterProductsIfHasOffer = () => {
        if (hasOffer) {
            return products.filter((product) => product.hasOffer);
        }
        return products;
    };

    return (
        <div>
            <ItemCollectionHeader
                title={title}
                hasOffer={hasOffer}
                endingDate="September 26, 2023 23:59:59"
            />
            <ItemCollectionContent
                itemCollection={filterProductsIfHasOffer()}
            />
        </div>
    );
}

export default ItemCollection;
