// File: src/components/Visualizer.js
import React, { useEffect, useState } from 'react';
import { getSortingSteps } from '../utils/sortingAlgorithms';
import { VisualizerContainer, Bar, OutputContainer } from './VisualizerStyles';

const Visualizer = ({ algorithm, arraySize, speed }) => {
    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isSorting, setIsSorting] = useState(false);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        resetArray();
    }, [arraySize]);

    const resetArray = () => {
        const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 1);
        setArray(newArray);
        setSteps([]);
        setCurrentStep(0);
        setIsSorting(false);
        setSorted(false);
    };

    useEffect(() => {
        if (isSorting && currentStep < steps.length) {
            const timer = setTimeout(() => {
                setArray(steps[currentStep].array);
                setCurrentStep(currentStep + 1);
            }, 1000 / speed);
            return () => clearTimeout(timer);
        } else if (currentStep >= steps.length && isSorting) {
            setIsSorting(false);
            setSorted(true);
        }
    }, [currentStep, steps, isSorting, speed]);

    const startSorting = () => {
        const sortingSteps = getSortingSteps(array, algorithm);
        setSteps(sortingSteps);
        setCurrentStep(0);
        setIsSorting(true);
        setSorted(false);
    };

    return (
        <VisualizerContainer>
            {array.map((value, idx) => (
                <Bar
                    key={idx}
                    height={value}
                    count={array.length}
                    isSwapping={steps[currentStep]?.swapped.includes(idx)}
                    sorted={sorted}
                />
            ))}
            <button onClick={startSorting}>Start</button>
            <button onClick={resetArray}>Reset</button>
            {sorted && (
                <OutputContainer>
                    <h3>Sorted Array:</h3>
                    <p>{array.join(', ')}</p>
                </OutputContainer>
            )}
        </VisualizerContainer>
    );
};

export default Visualizer;
