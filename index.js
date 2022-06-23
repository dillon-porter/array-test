const solarSystem = document.getElementById("solarSystem")
const planetsObj = [{
        "name": "Mercury",
        "moons": 0
    },
    {
        "name": "Venus",
        "moons": 0
    },
    {
        "name": "Earth",
        "moons": 1
    },
    {
        "name": "Mars",
        "moons": 2
    },
    {
        "name": "Jupiter",
        "moons": 67
    },
    {
        "name": "Saturn",
        "moons": 62
    },
    {
        "name": "Uranus",
        "moons": 27
    },
    {
        "name": "Neptune",
        "moons": 14
    }
]

function addMoons() {
    let sum = 0
    for (let i = 0; i < planetsObj.length; i++) {
        sum += planetsObj[i].moons
    }
    return sum
}

function ourSolarSystem() {
    planetsObj.forEach(planet => {
        solarSystem.innerText += `${planet.name} : ${planet.moons} moons \n\n`
    })
    solarSystem.innerHTML += `TOTAL MOONS IN THE SOLAR SYSTEM: ${addMoons()}`
}

ourSolarSystem()
