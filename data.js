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
            color: 'red',
            subdivisions: [{
                    id: 'hadean',
                    name: 'Hadean',
                    description: [],
                    start: 4600,
                    end: 4000,
                    color: 'pink',
                    subdivisions: [

                    ]
                },
                {
                    id: 'archean',
                    name: 'Archean',
                    description: [],
                    start: 4000,
                    end: 2500,
                    color: 'pink',
                    subdivisions: [

                    ]
                },
                {
                    id: 'proterozoic',
                    name: 'Proterozoic',
                    description: [],
                    start: 2500,
                    end: 541,
                    color: 'pink',
                    subdivisions: [{
                            id: 'paleoproterozoic',
                            name: 'Paleoproterozoic',
                            description: [],
                            start: 2500,
                            end: 1600,
                            color: 'pink',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'mesoproterozoic',
                            name: 'Mesoproterozoic',
                            description: [],
                            start: 1600,
                            end: 1000,
                            color: 'pink',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'neoproterozoic',
                            name: 'Neoproterozoic',
                            description: [],
                            start: 1000,
                            end: 541,
                            color: 'pink',
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
            color: 'blue',
            subdivisions: [{
                    id: 'paleozoic',
                    name: 'Paleozoic',
                    description: [
                        '"Ancient Life"'
                    ],
                    start: 541,
                    end: 252,
                    color: 'pink',
                    subdivisions: [{
                            id: 'cambrian',
                            name: 'Cambrian',
                            description: [
                            'First fishes, trilobites, corals and starfish'
                            ],
                            start: 570,
                            end: 505,
                            color: 'pink',
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
                            color: 'pink',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'silurian',
                            name: 'Silurian',
                            description: [],
                            start: 438,
                            end: 408,
                            color: 'pink',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'devonian',
                            name: 'Devonian',
                            description: [],
                            start: 408,
                            end: 360,
                            color: 'pink',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'carboniferous',
                            name: 'Carboniferous',
                            description: [],
                            start: 360,
                            end: 286,
                            color: 'pink',
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
                            color: 'pink',
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
                    color: 'purple',
                    subdivisions: [{
                            id: 'triassic',
                            name: 'Triassic',
                            description: [
                                'First dinosaurs, mammals, crocodiles and frogs evolve',
                            ],
                            start: 252,
                            end: 201,
                            color: 'red',
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
                            color: 'blue',
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
                            color: 'yellow',
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
                    color: 'green',
                    subdivisions: [{
                        id: 'palaeocene',
                        name: 'Palaeocene',
                        description: [],
                        start: 66,
                        end: 58,
                        color: 'red',
                        subdivisions: []
                    }, {
                        id: 'eocene',
                        name: 'Eocene',
                        description: [],
                        start: 58,
                        end: 37,
                        color: 'red',
                        subdivisions: []
                    }, {
                        id: 'oligocene',
                        name: 'Oligocene',
                        description: [],
                        start: 37,
                        end: 24,
                        color: 'red',
                        subdivisions: []
                    }, {
                        id: 'miocene',
                        name: 'Miocene',
                        description: [],
                        start: 24,
                        end: 5,
                        color: 'red',
                        subdivisions: []
                    }, {
                        id: 'pliocene',
                        name: 'Pliocene',
                        description: [],
                        start: 5,
                        end: 2,
                        color: 'red',
                        subdivisions: []
                    }, {
                        id: 'pleistocene',
                        name: 'Pleistocene',
                        description: [],
                        start: 2,
                        end: 0,
                        color: 'red',
                        subdivisions: []
                    }]
                }
            ]
        }
    ]
}
