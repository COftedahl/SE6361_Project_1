import { ExternalPathString, RelativePathString } from "expo-router";

export const ROUTE_DESTINATION: ExternalPathString = "/navigation" as ExternalPathString;
export const CHOOSE_ROUTE_DESTINATION: ExternalPathString = "/navigation/chooseroute" as ExternalPathString;

export const PreNavigateToTabs = (router: any) => {
  router.dismissAll();
}