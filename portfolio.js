const portfolioDisplay = document.querySelector('.portfolio')

fetch('portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.projects.forEach(function (project) {
    portfolioDisplay.innerHTML += 
        `<img src="${project.image}"> 
        <h4>${project.title}</h4>
        <div> 
            <p>Deliverables</p>
            <p>${project.deliverables}</p>
        </div>
        <a href="#">View Project</a>`
    })
})