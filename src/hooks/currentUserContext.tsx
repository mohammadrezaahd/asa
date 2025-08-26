import { RootState, useAppSelector } from "@/store";

const useCurrentUser = () => {
  return useAppSelector((state: RootState) => state.CurrentUser);
};

export default useCurrentUser;
