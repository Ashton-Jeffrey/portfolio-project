const portfolioDisplay = document.querySelector('.portfolio')

fetch('portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.projects.forEach(function (project) {
    portfolioDisplay.innerHTML += 
        `<div class=" flex flex-col gap-2 py-5 px-20 h-screen" >

            <div style="width:100%; 
                height:100%; 
                border:solid;
                background-image: url("${project.image}");">

            </div>

            <div class= "flex flex-wrap justify-between"> 
                <h4 class="text-pink-500 text-lg font-extrabold">${project.title}</h4>
                <div class="flex flex-col"> 
                    <p class="text-xs font-bold">Deliverables</p>
                    <p class="text-sm font-bold">${project.deliverables}</p>
                </div>
                <a class="text-sm font-bold hover:text-pink-500" href="#">View Project</a>
                </div>
            </div>`
    })
}) 

// <img class="object-contain w-full" src="${project.image}"> 