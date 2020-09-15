import React, { memo } from "react";
import { WrapperContainer, StyledLeft, StyledRight } from "./styled";
import { NavLink } from "react-router-dom";
import { headerNavRoutes } from "@/router/headerNav";
import classnames from "classnames";

const HeaderComp = memo(() => {
  return (
    <WrapperContainer>
      <div className="wrap_1100_center container">
        <StyledLeft>
          <a href="/#" hidefocus="true" className="logo sprite_topbar">
            网易云音乐
          </a>
          <ul>
            {
              headerNavRoutes.map(item => (
                <li key={item.navTitle} className={classnames("setected_nav")}>
                  {
                    item.path ? (
                      <NavLink to={item.path}>
                        {item.navTitle}
                        <i className="sprite_topbar icon"/>
                      </NavLink>
                    ) : (
                      <a href={item.externalLink} target="_blank">
                        {item.navTitle}{" "}
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
