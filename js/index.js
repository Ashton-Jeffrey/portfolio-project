const portfolioDisplay = document.querySelector('.portfolio')

fetch('js/portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.projects.forEach(function (project) {
    portfolioDisplay.innerHTML += 
        `<div class="flex flex-col gap-2 py-5 px-20 h-screen">

            <div class="w-full h-full bg-cover rounded-sm" style='background-image: url("${project.image}");'>
            </div>

            <div class= "flex flex-wrap justify-between"> 
                <h4 class="text-pink-500 text-lg font-extrabold">${project.title}</h4>
                <div class="flex flex-col"> 
                    <p class="text-xs font-bold">Deliverables</p>
                    <p class="text-sm font-bold">${project.deliverables}</p>
                </div>
                <a class="text-sm font-bold hover:text-pink-500" href="/portfolio.html#${project.projectno}">View Project</a>
                </div>
            </div>`
    })
}) 

