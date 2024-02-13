import { useContext } from "react";
import { LocationContext } from "../contexts";

const useLocation = () => {
  return useContext(LocationContext);
};
export default useLocation;
