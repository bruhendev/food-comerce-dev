import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt="logo" />
        <Outlet />
      </section>
    </Container>
  );
};

export default index;
