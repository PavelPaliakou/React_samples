import "./styles.css";
import { menuTree } from "./data.js";
import MenuList from "./menuList.jsx";

export default function TreeView() {


    return (
        <div className="container">
            <div className="side-menu">
                <h1>Tree View</h1>
                <MenuList list={menuTree} />
            </div>
            <div className="content"></div>
        </div>
    );
}