import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Carousel } from "antd";
import { WrapperContainer } from "./styled";
import { getBannerListAsyncAction } from "../../store/actionCreators";

const BannerComp = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBannerListAsyncAction())
  }, [dispatch])
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  }

  return (
    <WrapperContainer>
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </WrapperContainer>
  )
})

export default BannerComp
