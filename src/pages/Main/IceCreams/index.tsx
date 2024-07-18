import { useEffect, useState } from "react";
import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";
import { getIceCreams } from "../../../services/api";
import { SnackData } from "../../../interfaces/SnackData";

const IceCreams = () => {
  const [iceCreams, setIceCreams] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      const iceCreamsRequest = await getIceCreams();
      setIceCreams(iceCreamsRequest.data);
    })();
  }, []);

  return (
    <>
      <Head title="Sorvetes" description="Nossos melhores sorvetes" />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams} />
    </>
  );
};

export default IceCreams;
