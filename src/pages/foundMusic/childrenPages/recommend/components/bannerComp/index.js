import React, { memo, useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";
import { WrapperContainer, LeftContainer, RightContainer, BannerControl } from "./styled";
import { getBannerListAsyncAction } from "../../store/actionCreators";

const BannerComp = memo(() => {
  const [currIndex, setCurrIndex] = useState(0)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBannerListAsyncAction())
  }, [dispatch])

  const { banners } = useSelector(
    state => ({
      banners: state.getIn(["recommendReducer", "bannersList"])
    }),
    shallowEqual
  )

  const bannerRef = useRef()

  const bannerChange = useCallback((to) => {
    setCurrIndex(to)
  }, [])

  const bgImage = banners[currIndex] && `${banners[currIndex]["imageUrl"]}?imageView&blur=40x20`

  return (
    <WrapperContainer bgImage={bgImage}>
      <section className="banner wrap_730_center">
        <LeftContainer>
          <Carousel effect="fade" ref={bannerRef} beforeChange={bannerChange} autoplay>
            {
              banners.map(item =>
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                </div>
              )
            }
          </Carousel>
        </LeftContainer>
        <RightContainer/>
        <BannerControl>
          <button className="left btn" onClick={() => bannerRef.current.prev()}/>
          <button className="right btn" onClick={() => bannerRef.current.next()}/>
        </BannerControl>
      </section>
    </WrapperContainer>
  )
})

export default BannerComp
