export interface UndoProps {
    shape: "L" | "R" | "B" | "N";
    fromX: number;
    fromY: number;
    endX?: number;
    endY?: number;
    color?: string;
}

