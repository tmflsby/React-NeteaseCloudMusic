import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import NRecommendTitle from "@/components/nRecommendTitle";
import CommonItem from "@/components/commonItem";
import BannerComp from "./components/bannerComp";
import UserLogin from "./components/userLogin";
import NewDiscs from "./components/newDiscs";
import { fetchPersonalizedAsyncAction } from "./store/actionCreators";
import "./index.scss";

const Recommend = memo(() => {
  const [tabsState] = useState([
    {name: "华语"},
    {name: "流行"},
    {name: "摇滚"},
    {name: "民谣"},
    {name: "电子"}
  ])
  const dispatch = useDispatch()
  const { listData } = useSelector(
    state => ({
      listData: state.getIn(["recommendReducer", "personalizedList"])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchPersonalizedAsyncAction())
  }, [dispatch])

  return (
    <div>
      <BannerComp/>
      <section className="recommend_container wrap_980_center">
        <section className="container_left">
          <NRecommendTitle title="热门推荐" tabs={tabsState}/>
          <section className="lists">
            {
              listData.map(item => <CommonItem key={item.id} itemData={item}/>)
            }
          </section>
          <NRecommendTitle title="新碟上架" tag="new"/>
          <NewDiscs/>
          <NRecommendTitle title="榜单" tag="new"/>
        </section>
        <section className="container_right">
          <UserLogin/>
        </section>
      </section>
    </div>
  )
})

export default Recommend
