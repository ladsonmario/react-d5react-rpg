import { useEffect } from 'react';
import * as C from './App.styled';
import { Arrow } from './componets/Arrow';
import { Character } from './componets/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter('Day');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {     
    switch(e.key) {
      case 'w':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'a':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 's':
      case 'ArrowDown':
        char.moveDown();
      break;
      case 'd':
      case 'ArrowRight':
        char.moveRight();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.charName} />
      </C.Map>
      <Arrow char={char} />
    </C.Container>
  );
}

export default App;
