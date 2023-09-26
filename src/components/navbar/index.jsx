import React from "react";
import "./style.css";
import {Dropdown, Input, Space} from "antd";
import {Heart, ShoppingCart, UserCircle, Mountains, Coins, Toolbox, Headset, Cpu, MouseSimple, DesktopTower, Laptop} from "@phosphor-icons/react";
import {DownOutlined} from "@ant-design/icons";

const items = [
    {
        key: '1',
        label: (
            <p>
               <Cpu width={25} height={25}/> Hardware
            </p>
        ),
    },
    {
        key: '2',
        label: (
            <p>
                <MouseSimple width={25} height={25}/> Periféricos
            </p>
        ),
    },
    {
        key: '3',
        label: (
            <p>
               <DesktopTower width={25} height={25}/> Computadores
            </p>
        ),
    },
    {
        key: '4',
        label: (
            <p>
               <Laptop width={25} height={25}/> Notebooks
            </p>
        ),
    },
];

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="main-row">
                <div className="navbar-row w50">

                    <div className="title">
                        <p className="div-center"><Mountains width={32} height={32}/> GreenHill Store </p>
                    </div>
                    <div className="navbar-searchbar">
                        <Input.Search
                            rootClassName={"search-input"}
                        />
                    </div>
                    <div className={"navbar-icons"}>
                        <Heart width={32} height={32}/>
                        <ShoppingCart width={32} height={32}/>
                        <UserCircle width={32} height={32}/>
                    </div>

                </div>
            </div>
            <div className="secondary-row">
                <div className="navbar-row w50">
                    <div className="main-dropdown selectable">
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Departamentos
                                    <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div className="selectable">
                        <p className="div-center"><Coins width={24} height={24}/> Ofertas</p>
                    </div>
                    <div className="selectable">
                        <p className="div-center"><Toolbox width={24} height={24}/> Serviços</p>
                    </div>
                    <div className="selectable">
                        <p className="div-center"><Headset width={24} height={24}/> Suporte</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;