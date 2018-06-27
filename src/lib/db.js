import keyBy from 'lodash/fp/keyBy';
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
