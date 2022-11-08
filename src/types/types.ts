export type CharacterSidesType = 'down' | 'left' | 'right' | 'up';

export type CharType = {
    charName: string;
    x: number;
    y: number;
    side: CharacterSidesType;
    moveDown: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    moveUp: () => void;
}