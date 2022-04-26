$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/spotfight_card.png',
            link: 'projects/spotfight#content',
            title: 'Spotfight',
            technologies: ['UnrealEngine', 'C++'],
            description: "A comic-inspired 3v3 online multiplayer game, and the project I am most proud of.",
            categories: ['featured', 'game']
        },
        {
            image: 'assets/images/smashcombos_card.png',
            link: 'projects/smashcombos#content',
            title: 'SmashCombos',
            technologies: ['.NET Core', 'C#'],
            description: "An open-source community site for the game Super Smash Brothers Ultimate, where users can upload and discuss their favorite characters' combos and strategies.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/feedonfear_card.png',
            link: 'https://schwalm.itch.io/feed-on-fear',
            title: 'Feed on Fear',
            technologies: ['Unity', 'C#', 'Aseprite'],
            description: "A gamejam entry made in 48h that won first prize at the MMarmalade 6th Gamejam.",
            categories: ['gamejam', 'game', 'pixelart']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}