import React, { memo } from "react";
import SubNavComp from "../../components/subnav";
import BannerComp from "./childrenPages/recommend/components/bannerComp"

const FoundMusic = memo(() => {
  return (
    <div>
      {/* 二级导航 */}
      <SubNavComp/>
      {/*  视图渲染出口*/}
      <BannerComp/>
    </div>
  )
})

export default FoundMusic
