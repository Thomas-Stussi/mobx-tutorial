import React from 'react';
import AnimalList from '../Animals/AnimalList';
import AnimalInput from '../Animals/AnimalInput';
import { AnimalProvider } from '../../stores/AnimalStoreProvider';

const App = () => {
  return (
    <>
      <AnimalProvider>
        <AnimalList />
        <AnimalInput />
      </AnimalProvider>
    </>
  );
};

export default App;
