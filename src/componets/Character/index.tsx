import { CharacterSidesType } from '../../types/types';
import * as C from './styled';

type Props = {
    name: string;
    x: number;
    y: number;
    side: CharacterSidesType;
}
export const Character = ({ x, y, side, name }: Props) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }
    
    return (
        <C.Container 
            left={x * size} 
            top={y * size} 
            size={size}
            sidePos={sides[side] ?? 0}
        >
            <div className="name">{name}</div>
        </C.Container>
    );
}