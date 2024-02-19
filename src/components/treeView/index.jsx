import "./styles.css";
import {menus } from "./data.js";
import MenuList from "./menuList.jsx";

export default function TreeView() {


    return (
        <div className="container">
            <div className="side-menu">
                <h1>Tree View</h1>
                <MenuList list = {menus} />
            </div>
            <div className="content"></div>
        </div>
    );
}