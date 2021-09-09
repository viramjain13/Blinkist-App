import React from "react";
import Button from "@material-ui/core/Button";

const ButtonComponent = (props:any) => {
  const   {onClick, title, disabled} = props;

  return (
    <Button variant="contained" onClick={onClick} disabled={disabled}>
      {title}
    </Button>
  );
};

export default ButtonComponent;