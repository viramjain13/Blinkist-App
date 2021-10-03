import React from 'react';


function Image(props:any){
    return (<img src={props.src} style={props.styleObject} alt=" "/>);
}

export default Image;