/* Exercise 0:
  Import data from file "rick-and-morty-api-20-characters.json"
*/

import data from "./RyM20.json" with {type: "json"};

/* Exercise 1:
* For all characters,
retrieve parameters id, name, status, species, image and firstEpisode (their debut episode).
*/
const {results} = data; 

const ex1 = results.map((result) => {
  return {
    id: result.id, 
    name:result.name, 
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
const personajes = results.map((result)=>{
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

/* Exercise 6
* For all characters that debut on episode 10,
* retrieve parameters id, name, status, species, image and episode (list of all of their episodes).
*/

/* Exercise 7
* For all characters with status "unknown",
* retrieve their totalEpisodes (el número total de episodios en los que aparece).
*/

/* Exercise 8
* Reduce the Rick and Morty array of data to an object with the following parameters: alive, dead and unknown.
*/
// Initialize "statuses" object
const statuses = { 
  alive: 0, // number of characters with status "Alive"
  dead: 0, // number of characters with status "Dead"
  unknown: 0 // number of characters with status "unknown"
};