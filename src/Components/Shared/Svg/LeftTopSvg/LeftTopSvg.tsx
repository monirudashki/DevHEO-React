import React, { memo } from "react";
import styles from "./leftTopSvg.module.css";

function LeftTopSvg() {
  return (
    <div className={styles["svg-left"]}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <path
          id="blob"
          d="M389,284Q379,318,373,368.5Q367,419,316.5,400Q266,381,228.5,393.5Q191,406,129.5,408.5Q68,411,82,349.5Q96,288,75.5,245Q55,202,82.5,164Q110,126,149,106Q188,86,229,84.5Q270,83,316,85.5Q362,88,411,114Q460,140,429.5,195Q399,250,389,284Z"
          fill="#00cec9"
        ></path>
      </svg>
    </div>
  );
}

export default memo(LeftTopSvg);
