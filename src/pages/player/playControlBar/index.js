import React, { memo, useState } from "react";
import { Slider } from "antd";
import "./index.scss";

const PlayControlBar = memo(() => {
  const [defaultValue] = useState(80)

  return (
    <div className="play_container">
      <section className="lock">
        <button className="btn"/>
      </section>
      <section className="wrap_980_center content">
        <section className="btns">
          <button className="pre btn"/>
          <button className="play btn"/>
          <button className="next btn"/>
        </section>
        <section className="space"/>
        <section className="song_cover">
          <img src="https://p2.music.126.net/ZXByCLzRjyIQTyTCGXS3zg==/109951165277008551.jpg?param=34y34" alt="cover"/>
          <a href="/#" hidefocus="true" title="" className="mask"> </a>
        </section>
        <section className="play">
          <section className="j-flag words" style={{height: "28px", lineHeight: "28px"}}>
            <a href="/#" hidefocus="true" title=""
               className="f-thide name fc1 f-fl"
               style={{color: "#fff"}}
            >
              惊鸿一面
            </a>
            <span className="by f-thide f-fl" style={{marginLeft: "15px"}}>
              <span title="许嵩">
                <a href="/#" hidefocus="true" title="" className="singer">许嵩</a>
              </span>
            </span>
          </section>
          <section className="pbar">
            <Slider defaultValue={defaultValue}/>
            <span className="j-flag time">
              <span>03:50</span> / 04:35
            </span>
          </section>
        </section>
        <section className="warp_con">
          <div className="left">
            <button className="sprite_playbar btn favor"/>
            <button className="sprite_playbar btn share"/>
          </div>
          <section className="right">
            <button className="sprite_playbar btn volume"/>
            <button className="sprite_playbar btn loop"/>
            <button className="sprite_playbar btn playlist">112</button>
          </section>
        </section>
      </section>
    </div>
  )
})

export default PlayControlBar
