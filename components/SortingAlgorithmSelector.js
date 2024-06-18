import React from 'react';
import { SelectorContainer, Select } from './SortingAlgorithmSelectorStyles';

const SortingAlgorithmSelector = ({ algorithm, setAlgorithm }) => {
  const algorithms = ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort', 'Radix Sort', 'Shell Sort'];

  return (
    <SelectorContainer>
      <label>Sorting Algorithm:</label>
      <Select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
        {algorithms.map((alg) => (
          <option key={alg} value={alg}>
            {alg}
          </option>
        ))}
      </Select>
    </SelectorContainer>
  );
};

export default SortingAlgorithmSelector;