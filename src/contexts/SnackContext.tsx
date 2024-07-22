import { createContext, ReactNode, useEffect, useState } from "react";
import { SnackData } from "../interfaces/SnackData";
import {
  getBurgers,
  getDrinks,
  getIceCreams,
  getPizzas,
} from "../services/api";

export interface SnackContextProps {
  burgers: SnackData[];
  pizzas: SnackData[];
  drinks: SnackData[];
  iceCreams: SnackData[];
}

interface SnackProviderProps {
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps);

export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([]);
  const [drinks, setDrinks] = useState<SnackData[]>([]);
  const [iceCreams, setIceCreams] = useState<SnackData[]>([]);
  const [pizzas, setPizzas] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const burgerRequest = await getBurgers();
        const drinksRequest = await getDrinks();
        const iceCreamsRequest = await getIceCreams();
        const PizzasRequest = await getPizzas();

        const request = [
          burgerRequest,
          drinksRequest,
          iceCreamsRequest,
          PizzasRequest,
        ];

        const [
          { data: burgerResponse },
          { data: drinksResponse },
          { data: iceCreamsResponse },
          { data: PizzasResponse },
        ] = await Promise.all(request);

        setBurgers(burgerResponse);
        setDrinks(drinksResponse);
        setIceCreams(iceCreamsResponse);
        setPizzas(PizzasResponse);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <SnackContext.Provider value={{ burgers, drinks, iceCreams, pizzas }}>
      {children}
    </SnackContext.Provider>
  );
}
