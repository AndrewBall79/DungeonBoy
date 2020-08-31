import React from "react";

export default function Sprite({image, data, position}) {
    const {y, x, h, w} = data;
    return (
        <div
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                width: `${w}px`,
                height: `${h}px`,
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `-${x}px -${y}px`,
                // position: 'absolute',
                // top: props.position[1],
                // left: props.position[0],
                // margin: '8px 0px 0px 8px'
            }}
        />
    )
}