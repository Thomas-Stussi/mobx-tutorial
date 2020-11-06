import { useObserver } from 'mobx-react';
import React from 'react';
import { useAnimalStore } from '../../stores/AnimalStoreProvider';

const AnimalList = () => {
  const animalStore = useAnimalStore();

  return useObserver(() => (
    <ul>
      {animalStore.animals.map((animal) => {
        return (
          <li key={animal.id}>
            {animal.animalName}
            <button onClick={() => animalStore.removeAnimal(animal.id)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  ));
};

export default AnimalList;
