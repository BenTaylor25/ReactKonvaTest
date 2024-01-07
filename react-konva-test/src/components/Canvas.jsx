import { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

import './Canvas.css';

function Canvas() {
    const [rectXY, setRectXY] = useState({
        x: 0,
        y: 0
    });

    const handleRectChangePos = (event) => {
        setRectXY({
            x: event.target.x(),
            y: event.target.y()
        })
    };

    return (
        <>
            <p>Coordinates: ({Math.round(rectXY.x)}, {Math.round(rectXY.y)})</p>

            <Stage id="canvas" width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Rect
                        draggable
                        onDragEnd={handleRectChangePos}
                        {...rectXY}
                        width={50}
                        height={50}
                        fill={'green'}
                        />
                </Layer>
            </Stage>
        </>
    );
}

export default Canvas;
