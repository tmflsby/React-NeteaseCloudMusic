import React, { memo } from "react";
import "./index.scss";

const PlayControlBar = memo(() =>
  <div className="play_container">
    <section className="wrap_980_center content">
      <section className="btns">
        <button className="pre btn"/>
        <button className="play btn"/>
        <button className="next btn"/>
      </section>
    </section>
  </div>
)

export default PlayControlBar
