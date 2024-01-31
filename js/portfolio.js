const portfolioDisplay = document.querySelector('main')

fetch('js/portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.projects.forEach(function (project) {
    portfolioDisplay.innerHTML += 
        `<div class="gap-6 p-5 h-screen">
        <h3 class="text-8xl">
        ${project.title}
        </h3>
        <div class="flex flex-col gap-28"> 
            <div class="flex gap-40">
                <div class="w-full h-full bg-cover rounded-sm" style='background-image: url("${project.image}");'>
                </div>
            </div>

            <div class="flex gap-40">
                <div class="basis-1/4">
                    <p class="text-lg font-extrabold">Deliverables</p>
                    <p>${project.deliverables}</p>
                </div>

                <div class="basis-3/4 flex gap-2 pr-6">
                    <p>${project.description}</p>
                </div>   
            </div>

        </div>

    </div>`    
    
    })
}) 

