import ItemCollectionHeader from "./header";
import ItemCollectionContent from "./content";

const itens =
    [
        {
            title: "Placa de Vídeo RTX 3060 Ventus 2X MSI NVIDIA GeForce, 12GB GDDR6, DLSS, Ray Tracing - RTX 3060 Ventus 2X 12G OC",
            originalPrice: "R$ 2.999,90",
            price: "R$ 1.500,00",
            imageLink: "https://images7.kabum.com.br/produtos/fotos/384627/placa-de-video-msi-nvidia-geforce-rtx-3060-ventus-2x-12gb-gddr6-dlss-ray-tracing-912-v397-272_1663850312_m.jpg",
        }, {
        title: "Placa de Vídeo RTX 3060 Ventus 2X MSI NVIDIA GeForce, 12GB GDDR6, DLSS, Ray Tracing - RTX 3060 Ventus 2X 12G OC",
        // originalPrice: "R$ 2.999,90",
        price: "R$ 1.500,00",
        imageLink: "https://images7.kabum.com.br/produtos/fotos/384627/placa-de-video-msi-nvidia-geforce-rtx-3060-ventus-2x-12gb-gddr6-dlss-ray-tracing-912-v397-272_1663850312_m.jpg",
    },
    ]

function ItemCollection() {
    return (
        <div>
            <ItemCollectionHeader
                title="Ofertas Super Sônicas"
                hasOffer={true}
                endingDate="September 26, 2023 23:59:59"
            />
            <ItemCollectionContent
                itemCollection={itens}
            />
        </div>
    );
}

export default ItemCollection;
