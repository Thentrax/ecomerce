import ItemCollection from "../../components/itemCollection";

function MainPage() {
    return (

        <div className="App">
            <ItemCollection
                hasOffer={true}
                title={"Ofertas Super Sônicas"}
            />
            <ItemCollection
                hasOffer={false}
                title={"Para você"}
            />
        </div>

    );
}

export default MainPage;
