import React from "react";


import IconButton from "@material-ui/core/IconButton";

type IconButtonProps={
    icon:any, 
    disabled:boolean,
    onClick:any,
    color:any,

}

const IconButtonComponent = (props:IconButtonProps) => {
    const { icon, disabled, onClick, color } = props;
    return(
        <IconButton color={color} disabled={disabled} onClick={onClick}>
            {icon}
        </IconButton>
    );
};

export default IconButtonComponent;