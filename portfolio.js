const portfolioDisplay = document.querySelector('portfolio')

fetch('portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.projects.forEach(function (project) {
    portfolioDisplay.innerHTML += 
        `<img src="${projects.image}"> 
        <h4>${projects.title}</h4>
        <div> 
            <p>Deliverables</p>
            <p>${projects.deliverables}</p>
        </div>
        <a href="#">View Project</a>`
    })
})