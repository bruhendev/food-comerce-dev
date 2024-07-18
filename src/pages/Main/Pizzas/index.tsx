import { useEffect, useState } from "react";
import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";
import { getPizzas } from "../../../services/api";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    (async () => {
      const PizzasRequest = await getPizzas();
      setPizzas(PizzasRequest.data);
    })();
  }, []);

  return (
    <>
      <Head title="Pizzas" description="Nossas melhores pizzas" />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas} />
    </>
  );
};

export default Pizzas;
