import * as React from "react";
import Svg, { Path } from "react-native-svg";
const closeIcon = (props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#557184"
      d="M5.354 4.646a.5.5 0 1 0-.708.708l5.94 5.939a1 1 0 0 1 0 1.414l-5.94 5.94a.5.5 0 0 0 .708.707l5.939-5.94a1 1 0 0 1 1.414 0l5.94 5.94a.5.5 0 0 0 .707-.708l-5.94-5.939a1 1 0 0 1 0-1.414l5.94-5.94a.5.5 0 0 0-.708-.707l-5.939 5.94a1 1 0 0 1-1.414 0l-5.94-5.94Z"
    />
  </Svg>
);
export default closeIcon;
