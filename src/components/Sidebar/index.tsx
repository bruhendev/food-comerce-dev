import { Container } from "./styles";

import menuImg from "../../assets/menu.svg";
import PizzaIcon from "../../assets/pizza.svg?react";
import SodaPopIcon from "../../assets/soda.svg?react";
import IceCreamIcon from "../../assets/ice-cream.svg?react";
import BurgerIcon from "../../assets/burger.svg?react";
import { useState } from "react";

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
            <a href="" className="active">
              <BurgerIcon />
              <span>Hambúrgueres</span>
            </a>
          </li>
          <li>
            <a href="">
              <PizzaIcon />
              <span>Pizzas</span>
            </a>
          </li>
          <li>
            <a href="">
              <SodaPopIcon />
              <span>Bebidas</span>
            </a>
          </li>
          <li>
            <a href="">
              <IceCreamIcon />
              <span>Sorvetes</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Sidebar;
