const baseUrl = 'https://swapi.dev/api'

export async function getStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getPilots(urls) {
  const promises = urls.map(url => 
    fetch(url).then(res => res.json())
  )
  const pilotObjects = await Promise.all(promises)
  return pilotObjects
}

// const async function getPilots(urls) {
//   const 
// }

export async function getPlanets() {
  const res = await fetch(`${baseUrl}/planets`)
  return res.json()
}

export async function getPlanet(planetId) {
  const res = await fetch(`${baseUrl}/planets/${planetId}`)
  return res.json()
}