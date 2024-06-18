// File: src/components/VisualizerStyles.js
import styled from 'styled-components';

export const VisualizerContainer = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 500px;
    background-color: #fff;
    margin-top: 20px;
    border: 1px solid #ddd;
`;

export const Bar = styled.div`
    width: calc(${(props) => 100 / props.count}% - 2px);
    height: ${(props) => props.height}%;
    background-color: ${(props) =>
        props.sorted ? 'green' : props.isSwapping ? 'red' : '#007bff'};
    margin: 0 1px;
    transition: height 0.1s, background-color 0.1s;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
`;

export const OutputContainer = styled.div`
    margin-top: 20px;
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;
