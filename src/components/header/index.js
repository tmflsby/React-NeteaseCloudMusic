import React, { memo } from "react";
import { WrapperContainer, StyledLeft, StyledRight } from "./styled";
import { NavLink } from "react-router-dom";
import { headerNavConfig } from "../../common/config";
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
              headerNavConfig.map(item => (
                <li key={item.title} className={classnames("setected_nav")}>
                  <NavLink to={item.path}>
                    {item.title}
                    <i className="sprite_topbar icon"/>
                  </NavLink>
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
