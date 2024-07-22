import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";
import { useSnack } from "../../../hooks/useSnack";

const Drinks = () => {
  const { drinks } = useSnack();

  return (
    <>
      <Head title="Drinks" description="Nossos melhores drinks" />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  );
};

export default Drinks;
