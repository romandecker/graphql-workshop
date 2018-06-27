export const pets = [
    {
        id: 'e8b036e9-25e4-4743-8b27-2ac1f83ae71d',
        name: 'Lassie',
        friendIds: ['4edf49c8-4fe8-4731-abde-aa54c4baec92'],
        species: 'DOG',
        toysPlayedWithIds: ['feb48c9f-b622-4dc6-acd2-5202727a67ba'],
    },
    {
        id: '4edf49c8-4fe8-4731-abde-aa54c4baec92',
        name: 'Flipper',
        species: 'DOLPHIN',
        friendIds: [
            '4edf49c8-4fe8-4731-abde-aa54c4baec92',
            'e8b036e9-25e4-4743-8b27-2ac1f83ae71d',
            'aadeadd5-82ad-4000-bae6-4b849a82db51',
            '8e2e28cd-fc9d-4872-84a6-e09ded822016',
            '8d01ff76-1f6c-44b0-9a3f-dd3175ffc9ca',
            '623170d2-2828-461f-9fdb-3410e48005b3',
        ],
        toysPlayedWithIds: [
            'feb48c9f-b622-4dc6-acd2-5202727a67ba',
            '08a842c7-ee34-43fc-bba8-0a2d3eee1ac8',
        ],
    },
    {
        id: 'aadeadd5-82ad-4000-bae6-4b849a82db51',
        name: 'Airbud',
        species: 'DOG',
        friendIds: ['4edf49c8-4fe8-4731-abde-aa54c4baec92'],
        toysPlayedWithIds: ['feb48c9f-b622-4dc6-acd2-5202727a67ba'],
    },
    {
        id: '6ac0f202-8af0-4206-bf9e-457506236a5b',
        name: 'Grumpy Cat',
        species: 'CAT',
        friendIds: [],
        toysPlayedWithIds: ['feb48c9f-b622-4dc6-acd2-5202727a67ba'],
    },
    {
        id: '8e2e28cd-fc9d-4872-84a6-e09ded822016',
        name: 'Seabiscuit',
        species: 'HORSE',
        friendIds: ['4edf49c8-4fe8-4731-abde-aa54c4baec92'],
        toysPlayedWithIds: [],
    },
    {
        id: '8d01ff76-1f6c-44b0-9a3f-dd3175ffc9ca',
        name: 'Beethoven',
        species: 'DOG',
        friendIds: ['8d01ff76-1f6c-44b0-9a3f-dd3175ffc9ca'],
        toysPlayedWithIds: ['feb48c9f-b622-4dc6-acd2-5202727a67ba'],
    },
    {
        id: '623170d2-2828-461f-9fdb-3410e48005b3',
        name: 'Hooch',
        species: 'DOG',
        friendIds: ['4edf49c8-4fe8-4731-abde-aa54c4baec92', '8d01ff76-1f6c-44b0-9a3f-dd3175ffc9ca'],
        toysPlayedWithIds: ['feb48c9f-b622-4dc6-acd2-5202727a67ba'],
    },
];

export const toys = [
    {
        id: 'feb48c9f-b622-4dc6-acd2-5202727a67ba',
        name: 'Ball',
        weight: 250,
        ownerId: 'e8b036e9-25e4-4743-8b27-2ac1f83ae71d',
    },
    {
        id: '98ebde91-0c4c-4652-9be8-0b21195febc3',
        name: 'Bone',
        weight: 100,
        ownerId: '623170d2-2828-461f-9fdb-3410e48005b3',
    },
    {
        id: '08a842c7-ee34-43fc-bba8-0a2d3eee1ac8',
        name: 'Rubber ducky',
        weight: 150,
        ownerId: '4edf49c8-4fe8-4731-abde-aa54c4baec92',
    },
    {
        id: 'd06182a8-7b35-4d5a-945c-cbfa78aa3e07',
        name: 'Rubber mouse',
        weight: 50,
        ownerId: '6ac0f202-8af0-4206-bf9e-457506236a5b',
    },
];
