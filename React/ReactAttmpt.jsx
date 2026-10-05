
console.log({buenas: "Hola"}); 

const cosas = {
    name:"Miguel", 
    twitter: "@blabla",
    experience: {
        years: 18,
        focus: 'javascript'
    }

};  


//const years =

const {twitter,
    experience: {
        years
    },...resto} = cosas; 

//const {twitter, name: nombre} = cosas; 
const str = "twitter"; 
const twitter2 = cosas[str]; 

console.log({twitter, resto, years}); 

const cosasNewInfo = {...cosas,
    youtube: "@blablaYT",
    books: ['Aprende React']
}
console.log(cosasNewInfo.experience.years); 





/** const networks = [
    {
        id: 'youtube', 
        url: 'https://midu.tube',
        needsUpdate: true
  },
  {
        id: 'twitter',
        url: 'https://twitter.com/midudev',
        needsUpdate: true
  },
  {
        id: 'instagram',
        url: 'https://instagram.com/midu.dev',
        needsUpdate: false
  }  
]

//Uso de mapas


//.filter muestra los elementos que pasan una condición 
const filtro = networks.filter(singleNetwork => singleNetwork.needsUpdate === true)
console.log(filtro)
/** 
 * Devuelve: 
 * [
  { id: 'youtube', url: 'https://midu.tube', needsUpdate: true },
  { id: 'twitter', url: 'https://twitter.com/midudev', needsUpdate: true }
]
 */


//.map transformamos cada elemento y devuelve un nuevo array
/**
 * const mapa = networks.map(singleNetwork => singleNetwork.url); 
console.log(map)

 * Devuelve:  [
    'https://midu.tube',
    'https://twitter.com/midudev',
    'https://instagram.com/midu.dev'
  ]
 */

//.find busca un elemento de un arra que cumpla la consifion definida en el callback
/**
 * onst busca = networks.find(singleNetworks => singleNetworks.id == 'YouTube');
console.log(busca)

 * Devuelve: 
 * { id: 'youtube', url: 'https://midu.tube', needsUpdate: true }
 */

/** .some comprueba si algun elemento del array cumple una condición 
networks.some(singleNetwork => singleNetwork.id === 'tiktok') // false
networks.some(singleNetwork => singleNetwork.id === 'instagram') // true

*/