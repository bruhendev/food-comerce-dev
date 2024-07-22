import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";

import { useSnack } from "../../../hooks/useSnack";

const Burgers = () => {
  const { burgers } = useSnack();

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burgues" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  );
};

export default Burgers;
