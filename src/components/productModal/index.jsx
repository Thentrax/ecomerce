// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {useState, useEffect} from 'react';
import {Col, Input, message, Modal, Row, Select} from "antd";
import {ApiInstance} from "../../services/api";
import "./style.css";

function ProductModal({isOpen, setIsOpen, action, selectedProduct, fetchProducts}) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [hasOffer, setHasOffer] = useState(false);
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [ammount, setAmmount] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        if (action === 'edit') {
            fillFields();
        } else {
            clearFields();
        }
    }, [isOpen, action, fillFields, clearFields]);
    const fillFields = () => {
        setTitle(selectedProduct.title);
        setPrice(selectedProduct.price);
        setSalePrice(selectedProduct.salePrice);
        setHasOffer(selectedProduct.hasOffer);
        setDescription(selectedProduct.description);
        setImageLink(selectedProduct.imageLink);
        setAmmount(selectedProduct.ammount);
        setType(selectedProduct.type);
    };
    const clearFields = () => {
        setTitle('');
        setPrice('');
        setSalePrice('');
        setHasOffer(false);
        setDescription('');
        setImageLink('');
        setAmmount('');
        setType('');
    };
    const buildBody = () => {
        const formatedPrice = parseFloat(price);
        const formatedSalePrice = parseFloat(salePrice);
        const formatedAmmount = parseInt(ammount);
        let body;

        if (action === 'edit') {
            body = {
                id: selectedProduct.id,
                title,
                price: formatedPrice,
                salePrice: formatedSalePrice,
                hasOffer,
                description,
                imageLink,
                ammount: formatedAmmount,
                type,
            }
        } else {
            body = {
                title,
                price: formatedPrice,
                salePrice: formatedSalePrice,
                hasOffer,
                description,
                imageLink,
                ammount: formatedAmmount,
                type,
            }
        }
        return body;
    }
    const handleCreate = async () => {
        if (validateFields()) {
            try {
                await ApiInstance.post('/Product', buildBody());
                setIsOpen(false);
                clearFields();
                fetchProducts();
            } catch (error) {
                console.log(error);
                message.error('Houve algum erro ao criar o produto')
            }
        } else {
            message.error('Preencha todos os campos')
        }
    }

    const handleEdit = async () => {
        if (validateFields()) {
            try {
                await ApiInstance.put(`/Product/${selectedProduct.id}`, buildBody());
                setIsOpen(false);
                clearFields();
                fetchProducts();
            } catch (error) {
                console.log(error);
                message.error('Houve algum erro ao editar o produto')
            }
        } else {
            message.error('Preencha todos os campos')
        }
    }

    const validateFields = () => {
        return title && price && description && imageLink && ammount && type;
    };

    const onSubmit = () => {
        if (action === 'create') {
            handleCreate();
        } else {
            handleEdit();
        }
    };

    return (
        <Modal
            title={action === 'create' ? 'Criar produto' : 'Editar produto'}
            open={isOpen}
            onCancel={() => {
                setIsOpen(false)
            }}
            footer={
            <div className="form-footer">
                <button className="cancel-button" onClick={() => setIsOpen(false)}>Cancelar</button>
                <button className="submit-button" onClick={onSubmit}>Confirmar</button>
            </div>
            }
        >
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
            }}>
                <Row>
                    <Col span={24}>
                        <label>Título</label>
                        <Input
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Col>
                </Row>
                <Row style={{justifyContent: "space-between"}}>
                    <Col span={11}>
                        <label>Preço</label>
                        <Input
                            placeholder="Preço"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            type="number"
                        />
                    </Col>
                    <Col span={11}>
                        <label>Preço com Desconto</label>
                        <Input
                            placeholder="Preço"
                            value={salePrice}
                            onChange={(e) => setSalePrice(e.target.value)}
                            type="number"
                        />
                    </Col>
                </Row>
                <Row style={{justifyContent: "space-between"}}>
                    <Col span={11}>
                        <label>Em promoção</label>
                        <Select
                            placeholder="Em promoção"
                            value={hasOffer}
                            onChange={(e) => setHasOffer(e)}
                            required
                            style={{width: "100%"}}
                        >
                            <Select.Option value={true}>Sim</Select.Option>
                            <Select.Option value={false}>Não</Select.Option>
                        </Select>
                    </Col>
                    <Col span={11}>
                        <label>Tipo</label>
                        <Select
                            placeholder="Tipo"
                            value={type}
                            onChange={(e) => setType(e)}
                            required
                            style={{width: "100%"}}
                        >
                            <Select.Option value="hardware">Hardware</Select.Option>
                            <Select.Option value="perifericos">Perifericos</Select.Option>
                            <Select.Option value="computadores">Computadores</Select.Option>
                            <Select.Option value="notebooks">Notebooks</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row style={{justifyContent: "space-between"}}>
                    <Col span={11}>
                        <label>Quantidade no Estoque</label>
                        <Input
                            placeholder="Quantidade"
                            value={ammount}
                            onChange={(e) => setAmmount(e.target.value)}
                            type="number"
                            required
                        />
                    </Col>
                    <Col span={11}>
                        <label>Link da Imagem</label>
                        <Input
                            placeholder="Link da Imagem"
                            value={imageLink}
                            onChange={(e) => setImageLink(e.target.value)}
                            required
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <label>Descrição</label>
                        <Input.TextArea
                            rows={4}
                            placeholder="Descrição"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            style={{resize: "none"}}
                        />
                    </Col>
                </Row>

            </div>

        </Modal>
    );
}

export default ProductModal;

