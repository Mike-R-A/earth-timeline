const timelines = {
    id: 'timeline',
    name: 'Timeline of Earth',
    start: 4600,
    end: 0,
    minHeight: '1000px',
    subdivisions: [{
                    id: 'hadean',
                    name: 'Hadean',
                    description: [],
                    backgroundImage: {
                        source: 'Hadean.png'
                    },
                    start: 4600,
                    end: 4000,
                    color: 'indianred',
                    subdivisions: []
                },
                {
                    id: 'archean',
                    name: 'Archean',
                    description: [],
                    start: 4000,
                    end: 2500,
                    color: 'sandybrown',
                    minHeight: '1000px',
                    backgroundImage: {
                        source: '640px-Archean.png'
                    },
                    subdivisions: [{
                            id: 'eoarchean',
                            name: 'Eoarchean',
                            description: [],
                            start: 4000,
                            end: 3600,
                            color: 'indianred',
                            subdivisions: []
                        },
                        {
                            id: 'paleoarchean',
                            name: 'Paleoarchean',
                            description: [],
                            start: 3600,
                            end: 3200,
                            color: 'sandybrown',
                            subdivisions: []
                        },
                        {
                            id: 'mesoarchean',
                            name: 'Mesoarchean',
                            description: [],
                            start: 3200,
                            end: 2800,
                            color: 'gold',
                            subdivisions: []
                        },
                        {
                            id: 'neoarchean',
                            name: 'Neoarchean',
                            description: [],
                            start: 2800,
                            end: 2500,
                            color: 'lightgreen',
                            subdivisions: []

                        }
                    ]
                },
                {
                    id: 'proterozoic',
                    name: 'Proterozoic',
                    description: [],
                    start: 2500,
                    end: 541,
                    color: 'gold',
                    minHeight: '1000px',
                    subdivisions: [{
                            id: 'paleoproterozoic',
                            name: 'Paleoproterozoic',
                            description: [],
                            start: 2500,
                            end: 1600,
                            color: 'indianred',
                            subdivisions: []
                        },
                        {
                            id: 'mesoproterozoic',
                            name: 'Mesoproterozoic',
                            description: [],
                            start: 1600,
                            end: 1000,
                            color: 'sandybrown',
                            subdivisions: []
                        },
                        {
                            id: 'neoproterozoic',
                            name: 'Neoproterozoic',
                            description: [],
                            start: 1000,
                            end: 541,
                            color: 'gold',
                            minHeight: '1000px',
                            subdivisions: [{
                                    id: 'tonian',
                                    name: 'Tonian',
                                    description: [],
                                    start: 1000,
                                    end: 720,
                                    color: 'indianred',
                                    subdivisions: []
                                },
                                {
                                    id: 'cryogenian',
                                    name: 'Cryogenian',
                                    description: [],
                                    start: 720,
                                    end: 635,
                                    color: 'sandybrown',
                                    subdivisions: []
                                },
                                {
                                    id: 'edicaran',
                                    name: 'Edicaran',
                                    description: [],
                                    start: 635,
                                    end: 541,
                                    color: 'gold',
                                    backgroundImage: {
                                        source: '640px-Life_in_the_Ediacaran_sea.jpg'
                                    },
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
            description: [],
            start: 541,
            end: 0,
            color: 'sandybrown',
            minHeight: '1200px',
            subdivisions: [{
                    id: 'paleozoic',
                    name: 'Paleozoic',
                    description: [],
                    start: 541,
                    end: 252,
                    color: 'indianred',
                    minHeight: '1600px',
                    subdivisions: [{
                            id: 'cambrian',
                            name: 'Cambrian',
                            description: [
                                'First fishes, trilobites, corals and starfish'
                            ],
                            backgroundImage:{
                                source:'Cambrian.jpg'
                            },
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
                                'Giant sea scorpions and first land plants'
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
                            description: ['First reptiles and the great coal swamp forests'],
                            start: 360,
                            end: 286,
                            color: 'lightblue',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'permian',
                            name: 'Permian',
                            backgroundImage: {
                                source: 'Permian.jpg'
                            },
                            description: [
                                'Mammal-like reptiles such as Dimetrodon',
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
                    minHeight: '1000px',
                    subdivisions: [{
                            id: 'triassic',
                            name: 'Triassic',
                            description: [
                                'First dinosaurs, mammals, crocodiles and frogs evolve',
                            ],
                            backgroundImage: {
                                source: 'Triassic.jpg'
                            },
                            start: 252,
                            end: 201,
                            color: 'indianred',
                            subdivisions: []
                        },
                        {
                            id: 'jurassic',
                            name: 'Jurassic',
                            backgroundImage: {
                                source: 'Jurassic.jpg'
                            },
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
                            backgroundImage: {
                                source: 'Cretaceous.jpg'
                            },
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
                        'Age of mammals'
                    ],
                    start: 66,
                    end: 0,
                    color: 'gold',
                    minHeight: '2400px',
                    subdivisions: [{
                        id: 'paleogene',
                        name: 'Paleogene',
                        description: [],
                        start: 66,
                        end: 23,
                        color: 'indianred',
                        subdivisions: [{
                            id: 'palaeocene',
                            name: 'Palaeocene',
                            description: ['Mammals spead rapidly', 'First owls, shrews and hedgehogs'],
                            start: 66,
                            end: 56,
                            color: 'indianred',
                            subdivisions: []
                        }, {
                            id: 'eocene',
                            name: 'Eocene',
                            description: ['First dogs, cats, rabbits, elephants and horses'],
                            start: 56,
                            end: 34,
                            color: 'sandybrown',
                            subdivisions: []
                        }, {
                            id: 'oligocene',
                            name: 'Oligocene',
                            description: ['First deer, monkeys, pigs and rhinoceroses'],
                            backgroundImage: {
                                source: 'Oligocene.jpeg'
                            },
                            start: 34,
                            end: 23,
                            color: 'gold',
                            subdivisions: []
                        }]
                    }, {
                        id: 'neogene',
                        name: 'Neogene',
                        description: [],
                        start: 23,
                        end: 2.6,
                        color: 'sandybrown',
                        minHeight: '1500px',
                        subdivisions: [{
                            id: 'miocene',
                            name: 'Miocene',
                            description: ['Many new animals appeared', 'First mice, rats and apes'],
                            backgroundImage: {
                                source: 'Miocene.jpg'
                            },
                            start: 23,
                            end: 5,
                            color: 'indianred',
                            subdivisions: []
                        }, {
                            id: 'pliocene',
                            name: 'Pliocene',
                            description: ['Australopithecus appears', 'First cattle and sheep'],
                            backgroundImage: {
                                source: 'Pliocene.JPG'
                            },
                            start: 5,
                            end: 2.6,
                            color: 'sandybrown',
                            subdivisions: []
                        }]
                    }, {
                        id: 'quaternary',
                        name: 'Quaternary',
                        description: [],
                        start: 2.6,
                        end: 0,
                        color: 'gold',
                        minHeight: '1000px',
                        subdivisions: [{
                            id: 'pleistocene',
                            name: 'Pleistocene',
                            backgroundImage: {
                                source: 'Pleistocene.jpg'
                            },
                            description: ['The great ice ages', 'First modern humans appear'],
                            start: 2.6,
                            end: 0.012,
                            color: 'indianred',
                            subdivisions: []
                        }]
                    }]
                }
            ]
        }
    ]
}
