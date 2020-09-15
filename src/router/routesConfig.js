import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const YYDiscoverPage = lazy(() => import("../pages/discover"))
const YYRecommend = lazy(() => import("../pages/discover/childrenPages/recommend"))
const YYTopList = lazy(() => import("../pages/discover/childrenPages/topList"))
const YYPlayList = lazy(() => import("../pages/discover/childrenPages/playlist"))
const YYDJRadio = lazy(() => import("../pages/discover/childrenPages/djRadio"))
const YYArtist = lazy(() => import("../pages/discover/childrenPages/artist"))
const YYAlbum = lazy(() => import("../pages/discover/childrenPages/album"))

const YYMyPage = lazy(() =>import("../pages/my"))

const YYFriendPage = lazy(() => import("../pages/friend"))

const YYDownloadPage = lazy(() => import("../pages/download"))

const routesConfig = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover"/>
  },
  {
    path: "/discover",
    component: YYDiscoverPage,
    routes: [
      {
        path: "/discover/recommend",
        component: YYRecommend
      },
      {
        path: "/discover/toplist",
        component: YYTopList
      },
      {
        path: "/discover/playlist",
        component: YYPlayList
      },
      {
        path: "/discover/djradio",
        component: YYDJRadio
      },
      {
        path: "/discover/artist",
        component: YYArtist
      },
      {
        path: "/discover/album",
        component: YYAlbum
      }
    ]
  },
  {
    path: "/my",
    component: YYMyPage
  },
  {
    path: "/friend",
    component: YYFriendPage
  },
  {
    path: "/download",
    component: YYDownloadPage
  }
]

export default routesConfig
