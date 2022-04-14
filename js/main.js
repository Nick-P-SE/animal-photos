//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getAnimal)

function getAnimal(){
  const url = 'https://zoo-animal-api.herokuapp.com/animals/rand'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = data.name
        document.querySelector('img').src = data.image_link
        document.querySelector('.latinName').innerHTML = data.latin_name
        document.querySelector('.timeOfDay').innerHTML = data.active_time
        document.querySelector('.lifespan').innerHTML = `${data.lifespan} years`
        document.querySelector('.habitat').innerHTML = data.habitat
        document.querySelector('.diet').innerHTML = data.diet
        document.querySelector('.location').innerHTML = data.geo_range
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}