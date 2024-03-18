const portfolioDisplay = document.querySelector('main')

const requestedProject = window.location.hash.substring(1)

fetch('js/portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.projects.forEach(function (project) {
        portfolioDisplay.innerHTML +=
            `<div class="p-5 min-h-screen">
        <h3 class="text-8xl pb-10" id="${project.projectno}">
        ${project.title}
        </h3>
        <div class="flex gap-52"> 

            <div class="flex flex-col justify-center basis-1/2 gap-10">
                <div> 
                    <a class="hover:text-pink-500" href="${project.link}" alt="link-to-project-github">Link to GitHub</a>
                </div>

                <div class="flex flex-col gap-1">
                    <p class="text-lg font-extrabold">Deliverables</p>
                    <p>${project.deliverables}</p>
                </div>
            </div>
            <div class="flex flex-wrap flex-col gap-20">
   
                <div class="h-80 bg-center bg-no-repeat rounded-sm" style='background-image: url("${project.image}");'>
                </div>
                <div class="pr-6">
                    <p>${project.description}</p>
                </div>  
            </div> 
        </div>
    </div>`

    })
    setTimeout(() => {
        const scrollTarget = document.querySelector(`#${requestedProject}`)
        scrollTarget.scrollIntoView()
    }, 1);
})

