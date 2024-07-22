import { useContext } from "react";
import { SnackContext, SnackContextProps } from "../contexts/SnackContext";

export function useSnack(): SnackContextProps {
  return useContext(SnackContext);
}
