import React from "react";
import './styles.css';

export const Footer = (): JSX.Element => {
    return (
        <footer className="footer mt-3">
            <div className="content">

                <h2>List of available commands and examples</h2>
                        <ul>
                            <li className="instructions">N (starts a new Canva) Example: N 20 4</li>

                            <li className="instructions"> L (draws a line with the coordinates (x1,y1) as starting point and (x2,y2) as ending point ) Example: L 1 2 6 2</li>

                            <li className="instructions">R (draws a rectangle from (x1,y1) to (x2,y2)) Example: R 16 1 20 3</li>

                            <li className="instructions">C (uses a letter to simulate a color) Example: C o</li>

                            <li className="instructions">U Undo last action</li>

                            <li className="instructions">Q Close the program</li>


                        </ul>
                <p>
                   by <a href="https://github.com/Rodolfoarv/DrawingCanvas">Rodolfo Andrés Ramírez Valenzuela</a>
                </p>

            </div>
        </footer>
    );
}
