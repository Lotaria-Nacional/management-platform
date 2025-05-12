import { Permission } from "@/constants/navigation";


export const checkPermission = (
    routePermission: Permission[],
    userRole: Permission
  ) => {
    return routePermission.includes(userRole);
  };