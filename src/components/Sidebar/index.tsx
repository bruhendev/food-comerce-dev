import { Container } from "./styles";

import menuImg from "../../assets/menu.svg";
import PizzaIcon from "../../assets/pizza.svg?react";
import SodaPopIcon from "../../assets/soda.svg?react";
import IceCreamIcon from "../../assets/ice-cream.svg?react";
import BurgerIcon from "../../assets/burger.svg?react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleTogleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Container $isMenuOpen={menuOpen}>
      <button type="button" onClick={handleTogleMenu}>
        <img src={menuImg} alt="Menu Img" />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <BurgerIcon />
              <span>Hambúrgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="pizzas">
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="drinks">
              <SodaPopIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="ice-creams">
              <IceCreamIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Sidebar;
