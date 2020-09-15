import React, { memo } from "react";
import { useRouteMatch, Link } from "react-router-dom";

const CustomLink = memo(({label, to, activeOnlyWhenExact}) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </div>
  )
})

export default CustomLink
