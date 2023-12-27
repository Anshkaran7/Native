import { PixelRatio } from "react-native";

export const getFontSize = (size) => {
  const ratio = PixelRatio.get();
  const baseFontSize = 14; // Default font size for normal density devices
  const adjustedSize = (size * ratio) / 2;
  return Math.round(baseFontSize + adjustedSize);
};

export const scaleFontSize = (fontSize) => {
  const scaledFontSize = fontSize / PixelRatio.getFontScale() - 2;
  return scaledFontSize;
};
