import { Permission } from "@/app/constants/navigation";


export const checkPermission = (
    routePermission: Permission[],
    userRole: Permission
  ) => {
    return routePermission.includes(userRole);
  };