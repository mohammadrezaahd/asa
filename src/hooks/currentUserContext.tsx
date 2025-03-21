import { RootState } from "@/store";
import { useSelector } from "react-redux";

const useCurrentUser = () => {
  return useSelector((state: RootState) => state.CurrentUser);
};

export default useCurrentUser;
