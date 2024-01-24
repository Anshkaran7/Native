import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const proceedIcon = (props) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <G fill="#fff">
      <Path d="M4.305 3.515a.667.667 0 1 0-.943.942l4.195 4.196-4.195 4.195a.667.667 0 1 0 .943.943L8.97 9.124a.667.667 0 0 0 0-.943L4.305 3.515Z" />
      <Path d="M8.971 3.515a.667.667 0 1 0-.942.942l4.195 4.196-4.195 4.195a.667.667 0 0 0 .942.943l4.667-4.667a.667.667 0 0 0 0-.943L8.971 3.515Z" />
    </G>
  </Svg>
);
export default proceedIcon;
