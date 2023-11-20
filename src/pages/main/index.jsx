import ItemCollection from "../../components/itemCollection";

function MainPage() {
    return (
        <>
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

export default MainPage;
