import { nanoid } from 'nanoid';

export const createAnimalStore = () => {
  return ({
    animals: [],
    addAnimal(animalName) {
      this.animals.push({
        animalName,
        id: nanoid(),
      });
    },
    removeAnimal(id) {
      this.animals = this.animals.filter((animal) => animal.id !== id);
    },
  });
};
