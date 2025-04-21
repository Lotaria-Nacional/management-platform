import { Permission } from "@/app/routes/routes-config";

export const checkPermission = (
    routePermission: Permission[],
    userRole: Permission
  ) => {
    return routePermission.includes(userRole);
  };