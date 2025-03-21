import { TRole } from "@/interfaces/global/roles";

const useIsAdmin = (userRole: TRole): boolean => {
  return userRole === "ADMIN";
};

export default useIsAdmin;
