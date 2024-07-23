import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";
import MyOrder from "../../components/MyOrder";

const index = () => {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt="logo" />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  );
};

export default index;
