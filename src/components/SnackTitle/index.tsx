import { ReactNode } from "react";
import { Title } from "./styles";

interface TitleProps {
  children: ReactNode;
}

const SnackTitle = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

export default SnackTitle;
