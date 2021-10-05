import React from "react";
import { Typography } from "@material-ui/core";


const TypographyComponent = ({ variant, children,className, noWrap }:any) => {
  const getVariant = (variant:any) => {
    switch (variant) {
      case "alphaValue":
        return "h1";
      case "alphaHeader1":
        return "h2";
      case "alphaHeader2":
        return "h3";
      case "alphaHeader3":
        return "h4";
      default:
          return 'body1';
    }
  };

  return <Typography data-testid='3' variant={getVariant(variant)} className={className} noWrap={noWrap}>{children}</Typography>
};


export default TypographyComponent;