# React Konva Test

## Init

```bash
npm create vite@latest
# (y, react-konva-test, React, JavaScript)

git init
git remote add origin https://github.com/BenTaylor25/ReactKonvaTest.git

cd react-konva-test
npm i

npm i react-konva konva

cd ..
git add .
git commit -m "init"
git push origin master

cd react-konva-test
npm run dev
```

## Clear defaults

Clear `src/App.js` to:
```jsx
import './App.css'

function App() {

  return (
    <>
      <h1>React + Konva</h1>
    </>
  )
}

export default App
```

Clear `src/App.css` and `src/index.css` to empty.


## Create Canvas component

Create new folder `src/components/`.  
Add files `src/components/Canvas.jsx` and `src/components/Canvas.css`.

```jsx
// Canvas.jsx

import './Canvas.css';

function Canvas() {
    return (
        <div id="canvas">
            <p>test</p>
        </div>
    );
}

export default Canvas;
```

```css
div#canvas p {
    color: blue;
}
```


## Add Canvas component to App.jsx

```jsx
// App.jsx

import './App.css';
import Canvas from './components/Canvas';

function App() {

  return (
    <>
      <h1>React + Konva</h1>
      <Canvas />
    </>
  )
}

export default App;
```


## Add Konva to Canvas

```jsx
// Canvas.jsx

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
```

```css
/* Canvas.css */

#canvas {
    border: 1px solid black;
}
```
