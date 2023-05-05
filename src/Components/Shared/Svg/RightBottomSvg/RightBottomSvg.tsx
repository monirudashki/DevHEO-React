import React, { memo } from "react";

import styles from "./rightBottomSvg.module.css";

function RightBottomSvg() {
  return (
    <div className={styles["svg-right"]}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <path
          id="blob"
          d="M420.5,296Q440,342,418.5,388.5Q397,435,342,422.5Q287,410,250.5,409Q214,408,175.5,399.5Q137,391,118.5,356.5Q100,322,53,286Q6,250,52.5,213.5Q99,177,105,126.5Q111,76,162.5,83.5Q214,91,250.5,88.5Q287,86,337.5,81.5Q388,77,402,123.5Q416,170,408.5,210Q401,250,420.5,296Z"
          fill="#d8715e"
        ></path>
      </svg>
    </div>
  );
}

export default memo(RightBottomSvg);
