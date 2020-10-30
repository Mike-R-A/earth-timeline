$(document).ready(function () {
    let parentTimePeriod = timelines;
    let parents = [];
    getTimeline(parentTimePeriod);

    function getTimeline(parent) {
        const containerDiv = $('#timeline-container');
        containerDiv.css('height', parent.minHeight || '90%');

        const parentDiv = $('#timeline');
        parentDiv.empty();
        const breadcrumbsContainerDiv = $('#breadcrumbs nav');
        breadcrumbsContainerDiv.empty();

        let breadCrumbsList = $(`<ol id="breadcrumbs-list" class="breadcrumb"></ol>`);
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
            timePeriods = parent.subdivisions.sort((a, b) => a.order < b.order ? 1 : -1);
        } else {
            timePeriods = [parent];
        }

        for (const subdivision of timePeriods) {
            const index = timePeriods.indexOf(subdivision);
            const yearsAgoDiv = $(`<div class="years-ago col-3 col-lg-2 col-xl-1 shadow"></div>`);
            const startTimeDiv = $(`<div class="end-time">${subdivision.end}</div>`);
            const endTimeDiv = $(index == timePeriods.length - 1 ?
                `<div class="start-time">${
                    index == timePeriods.length - 1 ? subdivision.start : ''
                } </div>` : '');

            yearsAgoDiv.css('background-color', subdivision.color)
            yearsAgoDiv.append(startTimeDiv).append(endTimeDiv);

            let descriptionDiv = $(`
            <div class="description col-9 col-lg-10 col-xl-11 shadow">
            </div>
            `);

            const descriptionList = $(`
            <ul></ul>
            `);

            for (const descriptionPoint of subdivision.description) {
                const descriptionPointListItem = $(`<li>${descriptionPoint}</li>`);
                descriptionList.append(descriptionPointListItem);
            }
            const timePeriodHeading = `<h3>${subdivision.name}</h3>`;
            descriptionDiv.append(timePeriodHeading).append(descriptionList);

            const timePeriodContainer = $(`
            <div class="row time-period-container m-0">
            </div>
            `);

            const timePeriodToAdd = $(`
            <a href="#" class="list-group-item list-group-item-action time-period p-0">
            </a>`);

            timePeriodContainer
                .append(yearsAgoDiv)
                .append(descriptionDiv);

            timePeriodToAdd.append(timePeriodContainer);

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
