import ItemCollectionHeader from "./header";
import ItemCollectionContent from "./content";
import { storeItems } from "../../data/storeItems/items";

function ItemCollection({hasOffer, title}) {
    return (
        <div>
            <ItemCollectionHeader
                title={title}
                hasOffer={hasOffer}
                endingDate="September 26, 2023 23:59:59"
            />
            <ItemCollectionContent
                itemCollection={storeItems}
            />
        </div>
    );
}

export default ItemCollection;
