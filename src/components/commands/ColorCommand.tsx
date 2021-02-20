import React, { useEffect, useState } from "react";
import { doesCanvasExist, isNumberOfPropsCorrect } from "../../utils/utils";
import global, { dummyShape } from "../../store/global";

import { InvalidCommand } from "./InvalidCommand";
import { CommandType } from "../../types/component";
import { Fill } from "../shapes/Fill";
import { envVar, setCanvasColor } from "../../utils/utils";
import { Canvas } from "../shapes/Canvas";
import {Shape} from "../shapes/Shape";
import {Undo} from "../shapes/Undo";

export const ColorCommand = (props: CommandType): JSX.Element => {
  const [error, setError] = useState("");
  const [color, setColor] = useState("");

    useEffect(() => {
        setError("");

        if (!isNumberOfPropsCorrect(props.command, 2)) {
            setError("Invalid Command : ( Try: C o)");
        }
        if (!doesCanvasExist(global.canvas)) {
            setError("Canvas Doesnt exist");
        }else{
            setColor(props.command[1]);
            setCanvasColor(props.command[1]);
        }
    }, [props]);



    return (error === "") ? (<div> Color is set to {color? color.toString():""} </div> ) :
        <InvalidCommand error={error}/>;
};

/*
    return <Canvas width={global.canvas.width}
                   height={global.canvas.height} {...props}/>
*/