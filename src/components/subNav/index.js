import React, { memo } from "react";
import { WrapperContainer, MainCon } from "./styled";
import CustomLink from "../customLink";
import subNavRoutes from "@/router/subNav";


const SubNavComp = memo(function SubNavComp() {
  return (
    <WrapperContainer>
      <MainCon className="wrap_1100_center">
        {
          subNavRoutes.map(item => (
            <section className="item" key={item.path}>
              <CustomLink to={item.path} label={item.navTitle}/>
            </section>
          ))
        }
      </MainCon>
    </WrapperContainer>
  )
})

export default SubNavComp;
