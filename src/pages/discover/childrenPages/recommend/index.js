import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import NRecommendTitle from "@/components/nRecommendTitle";
import CommonItem from "@/components/commonItem";
import BannerComp from "./components/bannerComp";
import UserLogin from "./components/userLogin";
import { fetchPersonalizedAsyncAction } from "./store/actionCreators";
import "./index.scss";

const Recommend = memo(() => {
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
          <NRecommendTitle/>
          <section className="lists">
            {
              listData.map(item => <CommonItem key={item.id} itemData={item}/>)
            }
          </section>
        </section>
        <section className="container_right">
          <UserLogin/>
        </section>
      </section>
    </div>
  )
})

export default Recommend
