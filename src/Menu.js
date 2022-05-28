import React from 'react';
import './App.css';

const Menu = ({ items, active, setActive}) => {
    return (
        <div className={active ? "sideBarNav active" : "sideBarNav"} onClick={() => setActive(false)}>
            <div className={"menuHeader"}>
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

/*At touch/click sideBar not disappear */
/*<div className={"menuHeader"} onClick={e => e.stopPropagation()}>*/
