import ItemCollection from "../../components/itemCollection";

function ServicesPage() {
    return (
        <>
            <h1>Services Page</h1>
            <ItemCollection
                hasOffer={true}
                title={"Ofertas Super Sônicas"}
            />
            <ItemCollection
                hasOffer={false}
                title={"Para você"}
            />
        </>
    );
}

export default ServicesPage;
