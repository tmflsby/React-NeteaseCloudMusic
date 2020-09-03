import React, { memo, useEffect } from "react";
import axios from "axios";

const Home = memo(() => {
  useEffect(() => {
    axios(`/api/getList`).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return <div>home</div>
})

export default Home
