import React, { memo } from "react";
import { ContainerWrapper, Main } from "./styled";

const UserLogin = memo(() => {
  return (
    <ContainerWrapper>
      <Main>
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a href="/#" className="btn">用户登录</a>
      </Main>
    </ContainerWrapper>
  )
})

export default UserLogin
