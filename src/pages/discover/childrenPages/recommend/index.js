import React, { memo } from "react";
import NRecommendTitle from "@/components/nRecommendTitle";
import BannerComp from "./components/bannerComp";
import "./index.scss";

const Recommend = memo(() => {
  return (
    <div>
      <BannerComp/>
      <section className="recommend_container wrap_980_center">
        <section className="container_left">
          <NRecommendTitle/>
        </section>
        <section className="container_right"/>
      </section>
    </div>
  )
})

export default Recommend
