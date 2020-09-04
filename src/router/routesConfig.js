import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const YYFoundMusicPage = lazy(() => import("../pages/foundMusic"))
const YYRecommendPage  = lazy(() => import("../pages/foundMusic/childrenPages/recommend"))

const routesConfig = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/found"/>
  },
  {
    path: "/found",
    exact: true,
    component: YYFoundMusicPage,
    children: [
      {
        path: "/found/recommend",
        component: YYRecommendPage
      }
    ]
  }
]

export default routesConfig
