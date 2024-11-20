import React, {useState, useEffect} from 'react';
import {Col, Input, message, Modal, Row, Select} from "antd";
import {ApiInstance} from "../../services/api";
import "./style.css";

function ServiceModal({isOpen, setIsOpen, action, selectedService, fetchServices}) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [hasOffer, setHasOffer] = useState(false);
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');

    useEffect(() => {
        if (action === 'edit') {
            fillFields();
        } else {
            clearFields();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    const fillFields = () => {
        setTitle(selectedService.title);
        setPrice(selectedService.price);
        setSalePrice(selectedService.salePrice);
        setHasOffer(selectedService.hasOffer);
        setDescription(selectedService.description);
        setImageLink(selectedService.imageLink);
    };
    const clearFields = () => {
        setTitle('');
        setPrice('');
        setSalePrice('');
        setHasOffer(false);
        setDescription('');
        setImageLink('');
    };
    const buildBody = () => {
        const formatedPrice = parseFloat(price);
        const formatedSalePrice = parseFloat(salePrice);
        let body;

        if (action === 'edit') {
            body = {
                id: selectedService.id,
                title,
                price: formatedPrice,
                salePrice: formatedSalePrice,
                hasOffer,
                description,
                imageLink,
            }
        } else {
            body = {
                title,
                price: formatedPrice,
                salePrice: formatedSalePrice,
                hasOffer,
                description,
                imageLink,
            }
        }
        return body;
    }
    const handleCreate = async () => {
        if (validateFields()) {
            try {
                await ApiInstance.post('/Service', buildBody());
                setIsOpen(false);
                clearFields();
                fetchServices();
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
                await ApiInstance.put(`/Service/${selectedService.id}`, buildBody());
                setIsOpen(false);
                clearFields();
                fetchServices();
            } catch (error) {
                console.log(error);
                message.error('Houve algum erro ao editar o produto')
            }
        } else {
            message.error('Preencha todos os campos')
        }
    }

    const validateFields = () => {
        return title && price && description && imageLink;
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
            title={action === 'create' ? 'Criar serviço' : 'Editar serviço'}
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

export default ServiceModal;

