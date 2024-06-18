// File: src/components/ControlPanel.js
import React from 'react';
import { ControlPanelContainer, Button, Slider } from './ControlPanelStyles';

const ControlPanel = ({ arraySize, setArraySize, speed, setSpeed }) => {
    return (
        <ControlPanelContainer>
            <Button onClick={() => window.location.reload()}>Reset</Button>
            <div>
                <label>Array Size: {arraySize}</label>
                <Slider
                    type="range"
                    min="10"
                    max="100"
                    value={arraySize}
                    onChange={(e) => setArraySize(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Speed: {speed}</label>
                <Slider
                    type="range"
                    min="10"
                    max="100"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                />
            </div>
        </ControlPanelContainer>
    );
};

export default ControlPanel;
