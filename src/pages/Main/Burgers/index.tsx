import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";

const Burgers = () => {
  const data = [
    {
      id: 1,
      snack: "burger",
      name: "Mega",
      description:
        "O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon",
      price: 25.5,
      image: "https://i.imgur.com/upjIUnG.jpeg",
    },
    {
      id: 2,
      snack: "burger",
      name: "Extra bacon",
      description: "O artesanal para os amantes de bacon",
      price: 23.5,
      image: "https://i.imgur.com/BsxjAyR.jpeg",
    },
  ];

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burgues" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data} />
    </>
  );
};

export default Burgers;
