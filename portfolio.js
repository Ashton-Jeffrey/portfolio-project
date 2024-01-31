const portfolioDisplay = document.querySelector('.portfolio')

fetch('portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.projects.forEach(function (project) {
    portfolioDisplay.innerHTML += 
        `<div class=" flex flex-col px-20 h-screen" >
            <img class="object-contain m-auto" src="${project.image}"> 
            <div class= "flex flex-wrap justify-between"> 
                <h4 class="text-pink-500 text-lg font-extrabold">${project.title}</h4>
                <div class="flex flex-col"> 
                    <p>Deliverables</p>
                    <p>${project.deliverables}</p>
                </div>
                <a href="#">View Project</a>
                </div>
            </div>`
    })
})