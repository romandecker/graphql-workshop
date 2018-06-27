import keyBy from 'lodash/fp/keyBy';
import includes from 'lodash/fp/includes';
import uuid from 'uuid';

import { pets, toys } from './data';

const keyById = keyBy('id');

const petsById = keyById(pets);
const toysById = keyById(toys);

const createSubitemGetter = (subitemsById, subitemsIdsPropertyName) => (item) =>
    item[subitemsIdsPropertyName].map((id) => subitemsById[id]);

export const getPets = () => pets;
export const getToys = () => toys;

export const getFriendsByPet = createSubitemGetter(petsById, 'friendIds');
export const getPetById = (id) => petsById[id];

export const getToyById = (id) => toysById[id];
export const getToysByPet = createSubitemGetter(toysById, 'toysPlayedWithIds');

export const createToy = (toyData) => {
    const toy = { ...toyData, id: uuid.v4() };

    toys.push(toy);

    return toy;
};

export const logPlaySession = (pet, toy) => {
    const { toysPlayedWithIds } = petsById[pet.id];

    if (!includes(toy.id, toysPlayedWithIds)) {
        toysPlayedWithIds.push(toy.id);
    }

    return pet;
};
