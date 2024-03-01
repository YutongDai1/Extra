import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Initialize state to track the selected status of each box
  const [selectedBoxes, setSelectedBoxes] = useState(Array(9).fill(false));

  const toggleSelect = (index) => {

    const updatedSelectedBoxes = [...selectedBoxes];
    updatedSelectedBoxes[index] = !updatedSelectedBoxes[index];

    // Determine neighbors
    const neighbors = [index - 3, index + 3];
    if (index % 3 !== 0) {
      neighbors.push(index - 1);
    }
    if ((index + 1) % 3 !== 0) {
      neighbors.push(index + 1);
    }

    // Toggle neighbors
    neighbors.forEach((neighbor) => {
      if (neighbor >= 0 && neighbor < 9) {
        updatedSelectedBoxes[neighbor] = !updatedSelectedBoxes[neighbor];
      }
    });

    setSelectedBoxes(updatedSelectedBoxes);
  };
  const boxes = [];
  for (let i = 0; i < selectedBoxes.length; i++) {
    boxes.push(
    <div 
      className = {`box ${selectedBoxes[i] ? 'selected' : ''}`}
      onClick = {() => toggleSelect(i)} />);
  }
  return (
    <div className="container">
      {boxes}
    </div>
  );
}


export default App
