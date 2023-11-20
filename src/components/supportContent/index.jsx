import React from "react";
import "./style.css";
import {Envelope, Phone, Timer} from "@phosphor-icons/react";

function SupportContent() {
    return (<div className="support-wrapper">
        <div className="services-header">
            <h1> Suporte </h1>
        </div>
        <div className="support-content">
            <div className="support-row">
                <div className="image-wrapper" style={{width: '40%'}}>
                    <img
                        src="https://backend.intelbras.com/sites/default/files/styles/large/public/2019-01/intelbras_headstes-sub-headset_590x360_2.jpg"
                        alt="Suporte"/>
                </div>
                <div className="info-wrapper" style={{width: '60%'}}>
                    <div className="support-title">
                        Está com algum problema? Nós podemos te ajudar!
                    </div>
                    <div className="support-option">
                        <Phone/> {' '}
                        Contato via Telefone
                    </div>
                    <div className="service-description">
                        <span>
                            Entre em contato com a nossa equipe de suporte técnico e nós iremos te ajudar a resolver o seu problema.
                        </span>
                        <span>
                            <Timer/>
                            Horário de atendimento: 08:00 às 20:00
                        </span>
                        <span>
                            Segunda a Sábado, horário de Brasília (Exceto domingo e feriados)
                        </span>
                    </div>
                    <div className="support-option">
                        <Envelope/> {' '}
                        Email
                    </div>
                    <div className="service-description">
                        <b>
                            faleconosco@greenhillstore.com
                        </b>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default SupportContent;
