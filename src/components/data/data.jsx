/* eslint-disable no-dupe-keys */
import cvhoney1 from '../img/honey1.webp'
import cvhoney2 from '../img/honey2.webp'
import cvblonde from '../img/blonde1.webp'
import cvipa from '../img/ipa1.webp'
import cvred from '../img/red1.webp'
import cvstout from '../img/stout1.webp'

const productos= [
  {
    id:'1',
    nombre:'Cerveza Temple Rubia',
    precio:'$220',
    stock:'10',
    image: cvhoney1,
    categoria : "Rubia"
  },
  {
    id:'2',
    nombre:'Cerveza Antares Honey',
    precio:'$220',
    stock:'150',
    image: cvhoney2,
    categoria : "Rubia"
  },
  {
    id:'3',
    nombre:'Cerveza Temple Wolf IPA',
    precio:'$250',
    stock:'300',
    image: cvipa,
    categoria : "Ipa"
  },
  {
    id:'4',
    nombre:'Cerveza Andes Rubia',
    precio:'$240',
    stock:'130',
    image: cvblonde,
    categoria : "Rubia"
  },
  {
    id:'5',
    nombre:'Cerveza Andes Roja',
    precio:'$250',
    stock:'300',
    image: cvred,
    categoria : "Roja"
  },
  {
    id:'6',
    nombre:'Cerveza Quilmes Stout',
    precio:'$250',
    stock:'300',
    image: cvstout,
    categoria : "Negra"
},
  
]
export const getFetch = new Promise((aceptado, rechazada)=>{
  //Acciones todo ok 
  setTimeout(() => {
      aceptado(productos)        
  }, 2000);
  //rechazada('400 not found')
})

// const producto = 
//   { 
//     id:'1',
//     nombre:'Cerveza Temple Rubia',
//     precio:'$220',
//     stock:'500',
//     image: cvhoney1,

//     // id:'2',
//     // nombre:'Cerveza Antares Honey',
//     // precio:'$220',
//     // stock:'150',
//     // image: cvhoney2,
  
//     // id:'3',
//     // nombre:'Cerveza Temple Wolf IPA',
//     // precio:'$250',
//     // stock:'300',
//     // image: cvipa,

//     // id:'4',
//     // nombre:'Cerveza Andes Rubia',
//     // precio:'$240',
//     // stock:'130',
//     // image: cvblonde,

//     // id5:'5',
//     // nombre:'Cerveza Andes Roja',
//     // precio:'$250',
//     // stock:'300',
//     // image: cvred,

//     // id:'6',
//     // nombre:'Cerveza Quilmes Stout',
//     // precio:'$250',
//     // stock:'300',
//     // image: cvstout,

// }





// export const getFetchUno = new Promise((aceptado)=>{
//   //Acciones todo ok 
//   setTimeout(() => {
//       aceptado(producto)        
//   }, 2000);
//   //rechazada('400 not found')
// })

