import React, {useState, useEffect} from 'react';
import "./style.css";
import {ApiInstance} from "../../services/api";
import {formatToMonetary} from "../../services/toMonetary";
import {Divider, message, Popconfirm, Table, Tooltip} from "antd";
import ProductModal from "../../components/productModal";
import {PencilSimpleLine, Trash} from "@phosphor-icons/react";
import ServiceModal from "../../components/serviceModal";

function ManagementPage() {
    const [products, setProducts] = useState(null);
    const [services, setServices] = useState(null);
    const [productModalOpen, setProductModalOpen] = useState(false);
    const [serviceModalOpen, setServiceModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

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
            title: 'Título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price',
            render: (price) => formatToMonetary(price)
        },
        {
            title: 'Preço com Desconto',
            dataIndex: 'salePrice',
            key: 'salePrice',
            render: (salePrice) => formatToMonetary(salePrice)
        },
        {
            title: 'Em Promoção',
            dataIndex: 'hasOffer',
            key: 'hasOffer',
            render: (hasOffer) => hasOffer ? 'sim' : 'não'
        },
        {
            title: 'Tipo',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Quantidade',
            dataIndex: 'ammount',
            key: 'ammount',
        },
        {
            title: 'Ações',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, product) => (
                <div className="table-actions">
                    <Tooltip title={`Editar ${product.title}`}>
                        <PencilSimpleLine
                            className="edit"
                            onClick={() => handleEditProduct(product)}
                        />
                    </Tooltip>
                    <Tooltip title={`Excluir ${product.title}`}>
                        <Popconfirm
                            title={`Deseja excluir o produto ${product.title}?`}
                            okText="Sim"
                            cancelText="Não"
                            onConfirm={() => deleteProduct(product.id)}
                        >
                            <Trash
                                className="delete"
                            />
                        </Popconfirm>
                    </Tooltip>
                </div>
            )
        }
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
        {
            title: 'Ações',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, service) => (
                <div className="table-actions">
                    <Tooltip title={`Editar ${service.title}`}>
                        <PencilSimpleLine
                            className="edit"
                            onClick={() => handleEditService(service)}
                        />
                    </Tooltip>
                    <Tooltip title={`Excluir ${service.title}`}>
                        <Popconfirm
                            title={`Deseja excluir o serviço ${service.title}?`}
                            okText="Sim"
                            cancelText="Não"
                            onConfirm={() => deleteService(service.id)}
                        >
                            <Trash
                                className="delete"
                            />
                        </Popconfirm>
                    </Tooltip>
                </div>
            )
        }
    ]

    const handleCreateProduct = () => {
        setSelectedProduct(null);
        setProductModalOpen(true);
    };

    const handleCreateService = () => {
        setSelectedService(null);
        setServiceModalOpen(true);
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setProductModalOpen(true);
    };

    const handleEditService = (service) => {
        setSelectedService(service);
        setServiceModalOpen(true);
    };

    const deleteProduct = async (id) => {
        await ApiInstance.delete(`/Product/${id}`);
        fetchProducts();
        message.success("Produto excluído com sucesso");
    };

    const deleteService = async (id) => {
        await ApiInstance.delete(`/Service/${id}`);
        fetchServices();
        message.success("Serviço excluído com sucesso");
    };

    return (
        <>
            <div className="product-container">
                <h1>Gerenciamento de Produtos e Serviços</h1>
                <div className="table-containter">
                    <div className="container-header">
                        <h2>Produtos</h2>
                        <button className="add-button" onClick={handleCreateProduct}> Adicionar</button>
                    </div>
                    <Table columns={productColumns} dataSource={products} style={{width: "100%"}}/>
                </div>
                <Divider/>
                <div className="table-containter">
                    <div className="container-header">
                        <h2>Serviços</h2>
                        <button className="add-button" onClick={handleCreateService}>Adicionar</button>
                    </div>
                    <Table columns={serviceColumns} dataSource={services} style={{width: "100%"}}/>
                </div>
            </div>
            <ProductModal
                isOpen={productModalOpen}
                setIsOpen={setProductModalOpen}
                action={selectedProduct ? 'edit' : 'create'}
                selectedProduct={selectedProduct}
                fetchProducts={fetchProducts}
            />
            <ServiceModal
                isOpen={serviceModalOpen}
                setIsOpen={setServiceModalOpen}
                action={selectedService ? 'edit' : 'create'}
                selectedService={selectedService}
                fetchServices={fetchServices}
            />
        </>
    );
}

export default ManagementPage;
