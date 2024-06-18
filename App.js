// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Visualizer from './components/Visualizer';
import ControlPanel from './components/ControlPanel';
import SortingAlgorithmSelector from './components/SortingAlgorithmSelector';
import { GlobalStyle, Container } from './styles'; 

const App = () => {
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);

  return (
    <>
      <GlobalStyle />
      <Container>
        <SortingAlgorithmSelector algorithm={algorithm} setAlgorithm={setAlgorithm} />
        <ControlPanel arraySize={arraySize} setArraySize={setArraySize} speed={speed} setSpeed={setSpeed} />
        <Visualizer algorithm={algorithm} arraySize={arraySize} speed={speed} />
      </Container>
    </>
  );
};

export default App;