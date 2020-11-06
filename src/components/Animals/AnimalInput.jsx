import { useObserver } from 'mobx-react';
import React, { useState } from 'react';
import { useAnimalStore } from '../../stores/AnimalStoreProvider';

const AnimalInput = () => {
  const [animal, setAnimal] = useState('');
  const animalStore = useAnimalStore();

  const handleClick = () => {
    animalStore.addAnimal(animal);
    setAnimal('');
  };

  return useObserver(() => (
    <>
      <input
        value={animal}
        onChange={(event) => setAnimal(event.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Add Animal</button>
    </>
  ));
};

export default AnimalInput;
