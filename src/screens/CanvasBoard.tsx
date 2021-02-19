import React from "react";
import './styles.css';
import CommandsFactory from "../components/commands/CommandsFactory";
import {readCommand} from "../utils/utils";
import {CanvasBoardProps} from "../types/CanvasBoardProps";
import global from "../store/global";
import useStore from "../hooks/useStore";

export const CanvasBoard = ({command} : CanvasBoardProps) : JSX.Element => {
    global.canvas = useStore();
    return (
        <div
            className="container is-fullhd canvas-container">
                <CommandsFactory command={readCommand(command)} />
        </div>
    );
}
