import React from "react";

export default function Image(props){

        return (<div>
            <img src={props.src} width={props.width} height={props.height} alt="random"></img>
            </div>)


    };

Image.defaultProps = {
    width: 300,
    height: 200
}