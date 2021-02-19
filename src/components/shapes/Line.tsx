
import React, {useEffect} from "react";
import {ShapeProps} from "../../types/ShapeProps";
import {Shape} from "./Shape";
import global from "../../store/global";



export const Line = (props: ShapeProps) => {

    useEffect(() =>{
        //@ts-ignore
        props.startX && global.canvas.addShape({
            startX: props.startX,
            startY: props.startY,
            endX: props.endX,
            endY: props.endY,
            shape: "Line"
        })
    }, [props.startX, props.startY, props.endX, props.endY]);

    return <Shape shapes={[props]} />

}
