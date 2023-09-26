import React from "react";
import "./style.css";
import {Form, Input} from "antd";
import {
    Envelope,
    FacebookLogo,
    InstagramLogo, LinkedinLogo,
    Newspaper, TiktokLogo,
    TwitterLogo,
    User,
    WhatsappLogo,
    YoutubeLogo,
    WheelchairMotion,
    Buildings,
    Headset
} from "@phosphor-icons/react";

const Footer = () => {

    return (
        <div className="footer color-purple">
            <div className="main-row-footer">
                <div className="footer-row w50">

                    <div className="title-footer">
                        <p className=""><Newspaper/>Newsletter</p>
                        <span>Se inscreva para receber notícias e promoções!!</span>
                    </div>
                    <div className="footer-form">
                        <Form
                            layout="inline"
                            style={{width: '100%', height: '100%'}}
                        >
                            <Form.Item
                                name="name"
                                style={{width: '40%', height: '100%'}}
                            >
                                <Input
                                    placeholder="Seu nome"
                                    prefix={<User/>}
                                />
                            </Form.Item>
                            <Form.Item
                                style={{width: '40%', height: '100%'}}
                                name="email"
                            >
                                <Input
                                    placeholder="Seu email"
                                    prefix={<Envelope/>}
                                />
                            </Form.Item>
                            <Form.Item
                                style={{width: '16%', height: '100%'}}
                            >
                                <button className="newsletter-send">
                                    Enviar
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="secondary-row-footer">
                <div className="footer-row w50" style={{alignItems: "start"}}>
                    <div className="footer-item-column">
                        <h1><Buildings width={20} height={20}/> Institucional</h1>
                        <div className="footer-item-column-child">
                            <p>Quem somos</p>
                            <p>Política de privacidade</p>
                            <p>Termos de uso</p>
                            <p>Trabalhe conosco</p>
                            <p>Código de defesa do consumidor</p>
                        </div>
                    </div>
                    <div className="footer-item-column">
                        <h1><WheelchairMotion width={20} height={20}/> Acessibilidade</h1>
                        <div className="footer-item-column-child">
                            <p>Assesibilidade</p>
                        </div>
                    </div>
                    <div className="footer-item-column">
                        <h1>Mídias Sociais</h1>
                        <div className="footer-item-row-child">
                            <a href="https://www.facebook.com">
                                <FacebookLogo width={25} height={25}/>
                            </a>
                            <a href="https://www.instagram.com">
                                <InstagramLogo width={25} height={25}/>
                            </a>
                            <a href="https://wa.me/5524992755610">
                                <WhatsappLogo width={25} height={25}/>
                            </a>
                            <a href="https://www.linkedin.com">
                                <LinkedinLogo width={25} height={25}/>
                            </a>
                            <a href="https://www.x.com">
                                <TwitterLogo width={25} height={25}/>
                            </a>
                            <a href="https://www.youtube.com">
                            <YoutubeLogo width={25} height={25}/>
                            </a>
                            <a href="https://www.tiktok.com">
                            <TiktokLogo width={25} height={25}/>
                            </a>
                        </div>
                    </div>
                    <div className="footer-item-column">
                        <div className="footer-item-column-child">
                            <h1><Headset width={20} height={20}/> Atendimento</h1>
                            <span>
                                Horário de atendimento:
                                08:00 às 20:00 -
                                Segunda a Sábado,
                                horário de Brasília
                                (Exceto domingo e feriados)
                            </span>
                            <h1><Envelope width={20} height={20}/> Email</h1>
                            <span>faleconosco@greenhillstore.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;