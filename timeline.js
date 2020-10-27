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
                    description: [],
                    start: 541,
                    end: 252,
                    color: 'pink',
                    subdivisions: [{
                            id: 'cambrian',
                            name: 'Cambrian',
                            description: [],
                            start: 570,
                            end: 505,
                            color: 'pink',
                            subdivisions: [

                            ]
                        },
                        {
                            id: 'ordovician',
                            name: 'Ordovician',
                            description: [],
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
                            description: [],
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
                    description: [],
                    start: 252,
                    end: 66,
                    color: 'purple',
                    subdivisions: [{
                            id: 'triassic',
                            name: 'Triassic',
                            description: [],
                            start: 252,
                            end: 201,
                            color: 'red',
                            subdivisions: []
                        },
                        {
                            id: 'jurassic',
                            name: 'Jurassic',
                            description: [],
                            start: 201,
                            end: 145,
                            color: 'blue',
                            subdivisions: []
                        },
                        {
                            id: 'cretaceous',
                            name: 'Cretaceous',
                            description: [],
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
                    description: [],
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



$(document).ready(function () {
    let parentTimePeriod = timelines;
    let parents = [];
    getTimeline(parentTimePeriod);



    function getTimeline(parent) {
        const breadcrumbsContainerDiv = $('#breadcrumbs nav');
        const headerDiv = $('#header');
        const parentDiv = $('#timeline');

        breadcrumbsContainerDiv.empty();
        headerDiv.empty();
        parentDiv.empty();
        console.log(parents);

        let breadCrumbsList = $(`<ol class="breadcrumb"></ol>`);
        for (let i = 0; i < parents.length; i++) {
            const parentForBreadCrumb = parents[i];
            // <li class="breadcrumb-item"><a href="#">Home</a></li>
            //              <li class="breadcrumb-item active"
            //                  aria-current="page">Library</li>
            const breadcrumbsSpan = $(`
                    <li class="breadcrumb-item"><a href="#">${parentForBreadCrumb.name}</a></li>
                    `);

            breadcrumbsSpan.on('click', function () {
                while (parents.length > i) {
                    parentTimePeriod = parents.pop();
                }

                getTimeline(parentTimePeriod);
            });

            breadCrumbsList.append(breadcrumbsSpan);
        }
        const currentBreadCrumb = $(`
                <li class="breadcrumb-item active" aria-current="page">${parent.name}</li>
            `);

        breadCrumbsList.append(currentBreadCrumb);
        breadcrumbsContainerDiv.append(breadCrumbsList);


        // const heading = $(`
        //     <div class="col-sm-12">
        //         <h2>${parent.name}</h2>
        //     </div>`);

        // headerDiv.append(heading);


        let timePeriods = [];
        if (parent.subdivisions && parent.subdivisions.length > 0) {
            timePeriods = parent.subdivisions;
        } else {
            timePeriods = [parent];
        }

        for (const subdivision of timePeriods) {
            const index = timePeriods.indexOf(subdivision);
            const startTimeDiv = index == 0 ? `<div class="start-time">${subdivision.start} mya</div>` : '';

            let descriptionDiv = `
            <div class="description">
                <ul>
            `;
            for (const descriptionPoint of subdivision.description) {
                descriptionDiv += `<li>${descriptionPoint}</li>`;
            }
            descriptionDiv += `
                </ul>
            </div>
            `;

            const endTimeDiv = `<div class="end-time">${subdivision.end} mya</div>`;

            const timePeriodToAdd = $(`
            <a href="#" class="list-group-item list-group-item-action time-period">
                <h3>${subdivision.name}</h3>
                ${startTimeDiv}
                    ${descriptionDiv}
                ${endTimeDiv}
            </a>`);
            timePeriodToAdd.addClass('time-period');
            const percent = (subdivision.end - subdivision.start) / (parent.end - parent.start) * 100;
            timePeriodToAdd.css('height', `${percent}%`);
            timePeriodToAdd.attr('id', subdivision.id);
            parentDiv.append(timePeriodToAdd);
        }

        $('.time-period').on('click', function () {
            const id = $(this).attr('id');
            const newPotentialParent = parentTimePeriod.subdivisions.filter(t => t.id == id)[0];
            if (newPotentialParent) {
                parents.push(parentTimePeriod);
                parentTimePeriod = newPotentialParent;
                getTimeline(parentTimePeriod);
            }
        });
    }
});