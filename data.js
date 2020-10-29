const timelines = {
    id: 'timeline',
    name: 'Timeline of Earth',
    start: 4600,
    end: 0,
    subdivisions: [{
            id: 'precambrian',
            name: 'Pre-Cambrian',
            description: [
                '88% of Earth\'s history',
                'Formation of Earth',
                'Collision that formed the moon',
                'Gradual emergence of simple life'
            ],
            start: 4600,
            end: 541,
            color: 'indianred',
            subdivisions: [{
                    id: 'hadean',
                    name: 'Hadean',
                    description: [],
                    start: 4600,
                    end: 4000,
                    color: 'indianred',
                    subdivisions: [

                    ]
                },
                {
                    id: 'archean',
                    name: 'Archean',
                    description: [],
                    start: 4000,
                    end: 2500,
                    color: 'sandybrown',
                    subdivisions: [

                    ]
                },
                {
                    id: 'proterozoic',
                    name: 'Proterozoic',
                    description: [],
                    start: 2500,
                    end: 541,
                    color: 'gold',
                    subdivisions: [{
                            id: 'paleoproterozoic',
                            name: 'Paleoproterozoic',
                            description: [],
                            start: 2500,
                            end: 1600,
                            color: 'indianred',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'mesoproterozoic',
                            name: 'Mesoproterozoic',
                            description: [],
                            start: 1600,
                            end: 1000,
                            color: 'sandybrown',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'neoproterozoic',
                            name: 'Neoproterozoic',
                            description: [],
                            start: 1000,
                            end: 541,
                            color: 'gold',
                            subdivisions: [

                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'phanerozoic',
            name: 'Phanerozoic',
            description: [
                'Life gets going'
            ],
            start: 541,
            end: 0,
            color: 'sandybrown',
            subdivisions: [{
                    id: 'paleozoic',
                    name: 'Paleozoic',
                    description: [
                        '"Ancient Life"'
                    ],
                    start: 541,
                    end: 252,
                    color: 'indianred',
                    subdivisions: [{
                            id: 'cambrian',
                            name: 'Cambrian',
                            description: [
                                'First fishes, trilobites, corals and starfish'
                            ],
                            start: 570,
                            end: 505,
                            color: 'indianred',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'ordovician',
                            name: 'Ordovician',
                            description: [
                                'First nautiloids. Corals and trilobites common.'
                            ],
                            start: 505,
                            end: 438,
                            color: 'sandybrown',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'silurian',
                            name: 'Silurian',
                            description: [
                                'Giant sea scorpions',
                                'First land plants'
                            ],
                            start: 438,
                            end: 408,
                            color: 'gold',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'devonian',
                            name: 'Devonian',
                            description: ['First amphibians, insects and spiders'],
                            start: 408,
                            end: 360,
                            color: 'lightgreen',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'carboniferous',
                            name: 'Carboniferous',
                            description: ['First reptiles', 'Great coal swamp forests'],
                            start: 360,
                            end: 286,
                            color: 'lightblue',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'permian',
                            name: 'Permian',
                            description: [
                                'Rule of the mammal-like reptiles such as the sailbacks e.g. Dimetrodon',
                                'The Great Dying - the worst extinction event in the history of Earth'
                            ],
                            start: 286,
                            end: 245,
                            color: 'plum',
                            subdivisions: [

                            ]
                        }
                    ]
                },
                {
                    id: 'mesozoic',
                    name: 'Mesozoic',
                    description: [
                        '"Middle Life"',
                        'Age of the dinosaurs'
                    ],
                    start: 252,
                    end: 66,
                    color: 'sandybrown',
                    subdivisions: [{
                            id: 'triassic',
                            name: 'Triassic',
                            description: [
                                'First dinosaurs, mammals, crocodiles and frogs evolve',
                            ],
                            start: 252,
                            end: 201,
                            color: 'indianred',
                            subdivisions: []
                        },
                        {
                            id: 'jurassic',
                            name: 'Jurassic',
                            description: [
                                'Rule of the Dinosaurs',
                                'Age of the great Sauropods such as Diplodocus and Brachiosaurus',
                                'A line of dinosaurs evolves into the first birds'
                            ],
                            start: 201,
                            end: 145,
                            color: 'sandybrown',
                            subdivisions: []
                        },
                        {
                            id: 'cretaceous',
                            name: 'Cretaceous',
                            description: [
                                'Age of T-Rex, Triceratops and many other famous dinosaurs',
                                '10-15km wide meteorite strikes the Yucatan Peninsula',
                                'Extinction of the dinosaurs',
                                'First snakes',
                                'Many modern mammals evolve'
                            ],
                            start: 145,
                            end: 66,
                            color: 'gold',
                            subdivisions: []
                        }
                    ]
                },
                {
                    id: 'cenozoic',
                    name: 'Cenozoic',
                    description: [
                        '"Modern Life"',
                        'Age of mammals'
                    ],
                    start: 66,
                    end: 0,
                    color: 'gold',
                    subdivisions: [{
                        id: 'palaeocene',
                        name: 'Palaeocene',
                        description: ['Mammals spead rapidly', 'First owls, shrews and hedgehogs'],
                        start: 66,
                        end: 58,
                        color: 'indianred',
                        subdivisions: []
                    }, {
                        id: 'eocene',
                        name: 'Eocene',
                        description: ['First dogs, cats, rabbits, elephants and horses'],
                        start: 58,
                        end: 37,
                        color: 'sandybrown',
                        subdivisions: []
                    }, {
                        id: 'oligocene',
                        name: 'Oligocene',
                        description: ['First deer, monkeys, pigs and rhinoceroses'],
                        start: 37,
                        end: 24,
                        color: 'gold',
                        subdivisions: []
                    }, {
                        id: 'miocene',
                        name: 'Miocene',
                        description: ['Many new animals appeared', 'First mice, rats and apes'],
                        start: 24,
                        end: 5,
                        color: 'lightgreen',
                        subdivisions: []
                    }, {
                        id: 'pliocene',
                        name: 'Pliocene',
                        description: ['Australopithecus appears', 'First cattle and sheep'],
                        start: 5,
                        end: 2,
                        color: 'lightblue',
                        subdivisions: []
                    }, {
                        id: 'pleistocene',
                        name: 'Pleistocene',
                        description: ['The great ice ages', 'First modern humans appear'],
                        start: 2,
                        end: 0,
                        color: 'plum',
                        subdivisions: []
                    }]
                }
            ]
        }
    ]
}