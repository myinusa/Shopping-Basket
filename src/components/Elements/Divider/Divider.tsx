import * as React from "react";
import Divider from "@mui/material/Divider";

type DividerProps = {
  style: React.CSSProperties;
};

const DividerElement = ({ style }: DividerProps) => {
  return <Divider style={style} />;
};

export {DividerElement}