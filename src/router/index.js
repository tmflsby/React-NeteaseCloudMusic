import { memo } from "react";
import { renderRoutes } from "react-router-config";
import routesConfig from "./routesConfig";

const Router = memo(() => {
  return renderRoutes(routesConfig)
})

export default Router
