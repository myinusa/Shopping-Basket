import React from "react";
import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

interface Props extends TypographyProps {
    titleName?: string;
    costNumber?: number;
}

const TypographyElement = ({
  variant,
  titleName,
  className,
  costNumber,
}: Props) => {
  return (
    <Typography variant={variant} className={className}>
      {titleName || costNumber}
    </Typography>
  );
};

export { TypographyElement };
