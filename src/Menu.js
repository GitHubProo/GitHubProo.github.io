import React from 'react';
import './App.css';

const Menu = ({header, items}) => {
    return (
        <div>
            <div className={"blur"}></div>
            <div className={"sideBarNav"}>
                <div className={"menuHeader"}>{header}</div>
                <ul className={"ulSideBar"}>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;