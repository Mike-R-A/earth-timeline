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

        let breadCrumbsList = $(`<ol class="breadcrumb"></ol>`);
        for (let i = 0; i < parents.length; i++) {
            const parentForBreadCrumb = parents[i];

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