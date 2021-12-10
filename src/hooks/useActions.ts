import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { npmPackage } from "../redux";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(npmPackage, dispatch);
};
