import React, {useState, useEffect} from 'react';
import "./style.css";
import {ApiInstance} from "../../services/api";
import {formatToMonetary} from "../../services/toMonetary";
import {Divider, Table} from "antd";

function ManagementPage() {
    const [products, setProducts] = useState(null);
    const [services, setServices] = useState(null);

    useEffect(() => {
        fetchProducts();
        fetchServices();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await ApiInstance.get(`/Product`);
            setProducts(response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchServices = async () => {
        try {
            const response = await ApiInstance.get(`/Service`);
            setServices(response);
        } catch (error) {
            console.log(error);
        }
    }

    const productColumns = [
        {
            title: 'título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'preço',
            dataIndex: 'price',
            key: 'price',
            render: (price) => formatToMonetary(price)
        },
        {
            title: 'preço com desconto',
            dataIndex: 'salePrice',
            key: 'salePrice',
            render: (salePrice) => formatToMonetary(salePrice)
        },
        {
            title: 'em promoção',
            dataIndex: 'hasOffer',
            key: 'hasOffer',
            render: (hasOffer) => hasOffer ? 'sim' : 'não'
        },
        {
            title: 'tipo',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'quantidade',
            dataIndex: 'ammount',
            key: 'ammount',
        },
    ]

    const serviceColumns = [
        {
            title: 'título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'preço',
            dataIndex: 'price',
            key: 'price',
            render: (price) => formatToMonetary(price)
        },
        {
            title: 'preço com desconto',
            dataIndex: 'salePrice',
            key: 'salePrice',
            render: (salePrice) => formatToMonetary(salePrice)
        },
        {
            title: 'em promoção',
            dataIndex: 'hasOffer',
            key: 'hasOffer',
            render: (hasOffer) => hasOffer ? 'sim' : 'não'
        },
    ]

    return (
        <div className="product-container">
            <h1>Gerenciamento de Produtos e Serviços</h1>
            <div className="table-containter">
                <div className="container-header">
                    <h2>Produtos</h2>
                    <button className="add-button"> Adicionar</button>
                </div>
                <Table columns={productColumns} dataSource={products} style={{width: "100%"}}/>
            </div>
            <Divider/>
            <div className="table-containter">
                <div className="container-header">
                    <h2>Serviços</h2>
                    <button className="add-button">Adicionar</button>
                </div>
                <Table columns={serviceColumns} dataSource={services} style={{width: "100%"}}/>
            </div>
        </div>
    );
}

export default ManagementPage;
