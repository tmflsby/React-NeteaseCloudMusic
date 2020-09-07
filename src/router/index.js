import React, { memo } from "react";
import routesConfig from "./routesConfig";
import { Route, Switch } from "react-router-dom";

const RouterPage = memo(() => {
  return (
    <Switch>
      {
        routesConfig.map(item => (
          <Route path={item.path} exact={item.exact}
                 render={item.render} key={item.path}
                 component={item.component}
          />
        ))
      }
    </Switch>
  )
})

export default RouterPage
