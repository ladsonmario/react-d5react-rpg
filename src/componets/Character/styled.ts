import styled from 'styled-components';

export const Container = styled.div<{ left: number, top: number, size: number, sidePos: number; }>`
    width: ${p => p.size}px;
    height: ${p => p.size}px;        
    position: absolute;
    left: ${p => p.left}px;
    top: ${p => p.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${p => p.sidePos}px;

    .name {        
        background-color: #000;
        padding: 3px;
        border-radius: 5px;
        position: absolute;
        font-size: 10px;
        text-align: center;
        margin-top: -20px;        
    }
`;