import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-image: url('/assets/arrow.png');
    background-position: center;
    background-size: contain;
    width: 200px;
    height: 200px;
    margin: 20px 0 0 20px;

    button {        
        position: absolute;
        border: 0;
        background: none;
    }

    .up {
       left: 75px; 
       height: 75px;
       width: 50px;
    }
    .down {
        bottom: 0;
        left: 75px;
        height: 75px;
        width: 50px;
    }
    .left {
        top: 75px;
        width: 75px;
        height: 50px;
    }
    .right {
        top: 75px;
        right: 0;
        width: 75px;
        height: 50px;
    }
`;