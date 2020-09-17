import React, { memo } from "react";
import { WrapperContainer, StyledLeft, StyledRight } from "./styled";
import { NavLink } from "react-router-dom";
import headerNavRoutes  from "@/router/headerNav";

const HeaderComp = memo(() => {
  return (
    <WrapperContainer>
      <div className="wrap_1100_center container">
        <StyledLeft>
          <a href="/#" hidefocus="true" className="logo sprite_topbar">
            网易云音乐
          </a>
          <ul className="m_nav">
            {
              headerNavRoutes.map(item => (
                <li key={item.navTitle}>
                  {
                    item.path ? (
                      <NavLink to={item.path}>{item.navTitle}</NavLink>
                    ) : (
                      <a href={item.externalLink} target="_blank"  rel="noopener noreferrer">
                        {item.navTitle}
                      </a>
                    )
                  }
                </li>
              ))
            }
          </ul>
        </StyledLeft>
        <StyledRight/>
      </div>
    </WrapperContainer>
  )
})

export default HeaderComp
