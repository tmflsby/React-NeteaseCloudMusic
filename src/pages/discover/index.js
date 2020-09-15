import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import SubNavComp from "@/components/subNav";

const DiscoverPage = memo(({route: {routes}}) => {
  return (
    <div>
      <SubNavComp/>
      { renderRoutes(routes) }
    </div>
  )
})

export default DiscoverPage
