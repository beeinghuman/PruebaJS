/* Exercise 0:
  Import data from file "rick-and-morty-api-20-characters.json"
*/

import data from "./RyM20.json" with {type: "json"};

/* Exercise 1:
* For all characters,
retrieve parameters id, name, status, species, image and firstEpisode (their debut episode).
*/
const { results } = data;

const ex1 = results.map((result) => {
  return {
    id: result.id,
    name: result.name,
    status: result.status,
    species: result.species,
    image: result.image,
    firstEpisode: result.episode[0]
  }
});

const ex1Alt = results.map(({
  id,
  name,
  status,
  species,
  image,
  episode
}) => {
  return {
    id,
    name,
    status,
    species,
    image,
    firstEpisode: episode
  }
});

console.log(ex1);
console.log(ex1Alt);

/* Exercise 2:
* For all characters that are dead,
* retrieve parameters id, name, status, species, image and lastEpisode.
*/
const personajes = results.map((result) => {
  return {
    id: result.id,
    name: result.name,
    status: result.status,
    species: result.species,
    image: result.image,
    lastEpisode: result.episode[result.episode.length - 1]
  }
});

const dead = personajes.filter(personaje => personaje.status === "Dead")

console.log(dead)

/* Exercise 3:
* For all characters that are NOT dead and appear at least on episode 10,
* retrieve parameters id, name, status, species, image and firstEpisode.
*/

//nombre: filtrado Not Dead
/**
 * 
 if(result.status !== "Dead")
    return true
  else
    return false
*/
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 */

const filtradoFinal = results
  .filter((result) => {
    //  return result.status !== "Dead" && result.episode.includes("https://rickandmortyapi.com/api/episode/10") ?  true : false
    return result.status !== "Dead" && result.episode.includes("https://rickandmortyapi.com/api/episode/10")
  })
  .map((result) => {
    return {
      id: result.id,
      name: result.name,
      status: result.status,
      species: result.species,
      image: result.image,
      firstEpisode: result.episode[0]
    }
  });

console.log(filtradoFinal);

/* Exercise 6
* For all characters that debut on episode 10,
* retrieve parameters id, name, status, species, image and episode (list of all of their episodes).
*/
const primerE10 = results
  .filter((result) => {
    return result.episode[0].includes("https://rickandmortyapi.com/api/episode/10")
  })
  .map((result) => {
    return {
      id: result.id,
      name: result.name,
      status: result.status,
      species: result.species,
      image: result.image,
      episodes: result.episode
    }
  });

console.log(primerE10)

/* Exercise 7
* For all characters with status "unknown",
* retrieve their totalEpisodes (el número total de episodios en los que aparece).
*/

const ukwStatus = results
  .filter((result) => {
    return result.status === "unknown"
  })
  .map((result) => {
    return {
      name: result.name,
      totalEpisodes: result.episode.length,
      status: result.status,
      species: result.species,
      image: result.image
    }
  })

console.log(ukwStatus)


/* Exercise 8
* Reduce the Rick and Morty array of data to an object with the following parameters: alive, dead and unknown.
*/
// Initialize "statuses" object


//Filtrando
const aliveF = results
  .filter((result) => {
    return result.status === "Alive"
  })
  .map((result) => {
    return {
      id: result.id,
      name: result.name,
      status: result.status
    }
  });

const deadF = results
  .filter((result) => {
    return result.status === "Dead"
  })
  .map((result) => {
    return {
      id: result.id,
      name: result.name,
      status: result.status
    }
  });

const unknownF = results
  .filter((result) => {
    return result.status === "unknown"
  })
  .map((result) => {
    return {
      id: result.id,
      name: result.name,
      status: result.status
    }
  });

const statusesF = {
  alive: aliveF.length, // number of characters with status "Alive"
  dead: deadF.length, // number of characters with status "Dead"
  unknown: unknownF.length // number of characters with status "unknown"
};

console.log(statusesF)

//Usando el reduce
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const initialStatuses = {
  alive: 0, // number of characters with status "Alive"
  dead: 0, // number of characters with status "Dead"
  unknown: 0 // number of characters with status "unknown"
};

function statusesFiltros(result) {
  if (result.status === "Alive"){
    ++initialStatuses.alive 
  }
  else if (result.status === "Dead"){
    ++initialStatuses.dead 
  }
  else{
    ++initialStatuses.unknown
  }



//Que me devuelva un objeto que actualice los datos
const actualizado = {
  alive: initialStatuses.alive,
  dead: initialStatuses.dead,
  unknown: initialStatuses.unknown
}
return actualizado

}
const statuses = results.reduce(statusesFiltros, initialStatuses)

console.log(statuses)

//Por consola me devuelve unicamente el valor de unknown y sale 20