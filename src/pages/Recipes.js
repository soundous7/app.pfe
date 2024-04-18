import React from "react";
import { MenuList } from "../helpers/MeniList";
import MenuItem from "../components/Menultems";
import "../styles/Recipes.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Recipes</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;