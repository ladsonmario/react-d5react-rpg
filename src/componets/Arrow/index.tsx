import { CharType } from '../../types/types';
import * as C from './styled';

type Props = {
    char: CharType;
}
export const Arrow = ({ char }: Props) => { 
    const handleArrowMove = (pos: string) => {
        switch(pos) {
            case 'up':            
              char.moveUp();
            break;
            case 'left':            
              char.moveLeft();
            break;
            case 'down':            
              char.moveDown();
            break;
            case 'right':            
              char.moveRight();
            break;
          }
    }

    return (
        <C.Container>            
            <button className="up" onClick={() => handleArrowMove('up')}></button>
            <button className="down" onClick={() => handleArrowMove('down')}></button>
            <button className="left" onClick={() => handleArrowMove('left')}></button>
            <button className="right" onClick={() => handleArrowMove('right')}></button>
        </C.Container>
    );
}