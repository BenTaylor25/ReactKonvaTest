import './Canvas.css';
import { Stage, Layer, Rect } from 'react-konva';

function Canvas() {
    return (
        <Stage id="canvas" width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect
                    x={20}
                    y={20}
                    width={50}
                    height={50}
                    fill={'green'}
                    />
            </Layer>
        </Stage>
    );
}

export default Canvas;
