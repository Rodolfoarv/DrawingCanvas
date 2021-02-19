import React, {useEffect, useState} from "react";
import {doesCanvasExist, isMinNumberOfPropsCorrect} from "../../utils/utils";
import global from "../../store/global";
import {CommandType} from "../../types/component";
import {InvalidCommand} from "./InvalidCommand";
import {Undo} from "../shapes/Undo";

export const UndoCommand = (props: CommandType): JSX.Element => {
    return (<></>)
}
