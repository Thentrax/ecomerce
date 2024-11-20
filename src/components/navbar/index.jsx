import React from "react";
import "./style.css";
import {Dropdown, Space, Badge} from "antd";
import {
    Heart,
    ShoppingCart,
    UserCircle,
    Mountains,
    Toolbox,
    Headset,
    Cpu,
    MouseSimple,
    DesktopTower,
    Laptop,
    Bell,
    CaretDown
} from "@phosphor-icons/react";

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

                    <a href={"/"} className="title">
                        <p className="div-center"><Mountains width={32} height={32}/> GreenHill Store </p>
                    </a>
                    <div className="navbar-searchbar"/>
                    <div className={"navbar-icons"}>
                        <Heart width={32} height={32}/>
                        <ShoppingCart width={32} height={32}/>
                        <UserCircle width={32} height={32} />
                        <Badge count={11} overflowCount={10}><Bell width={32} height={32} /></Badge>
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
                                    Departamentos <CaretDown width={24} height={24}/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <a href={"/services"} className="selectable">
                        <p className="div-center">Serviços <Toolbox width={24} height={24}/></p>
                    </a>
                    <a href={"/support"} className="selectable">
                        <p className="div-center">Suporte <Headset width={24} height={24}/></p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;