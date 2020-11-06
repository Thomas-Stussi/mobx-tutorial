import React, { createContext, useContext } from 'react';
import { createAnimalStore } from './AnimalStore';
import { useLocalObservable } from 'mobx-react';

const AnimalContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AnimalProvider = ({ children }) => {
  const animalStore = useLocalObservable(() => createAnimalStore());

  return (
    <AnimalContext.Provider value={animalStore}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimalStore = () => useContext(AnimalContext);
