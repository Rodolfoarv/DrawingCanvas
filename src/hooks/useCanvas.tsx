import {useEffect, useState} from "react";
import {FillProps} from "../types/FillProps";
import {beyondCanvasRange, envVar} from "../utils/utils";



export default function useCanvas (width: number, height:number) {

    const [border] = useState({
        horizontal: envVar.horizontalStyle,
        vertical: envVar.verticalStyle
    });

    const [canvasBody, setCanvasBody] = useState();

    const drawShapes = (shapes:any, fillValues: any, removeShapes: any, removeFill: any) => {




        if( canvasBody && removeFill ) {
            //@ts-ignore
            return fillCanvas({...removeFill, prvColor: "."});
        }

    }

    const fillBlankCanvasBody = () =>{
        return  Array(height).fill(0).map(row =>
            new Array(width).fill(" "));
    }





    return {border, canvasBody, drawShapes}
}
