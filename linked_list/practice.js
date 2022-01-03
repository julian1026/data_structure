// let list={
//     head:{
//         value:1,
//         next:{
//             value:2,
//             next:{
//                 value:3,
//                 next:{
//                     value:4,
//                     next:{
//                         value:5,
//                         next:null
//                     }
//                 }
//             }
//         }
//     }
// }

// let stable={
//     value:2,
//     next:{
//         value:3,
//         next:{
//             value:4,
//             next:{
//                 value:5,
//                 next:null
//             }
//         }
//     }
// }

// let remove={
//     value:3,
//     next:{
//         value:4,
//         next:{
//             value:5,
//             next:null
//         }
//     }
// }

// let node=remove.next;
// stable.next=node;

// let flag=0;
// let listFull={
//     head:{
//         prev:null,
//         value:true,
//         next:{
//             prev:++flag,
//             value:12,
//             next:{
//                 prev:++flag,
//                 value:false,
//                 next:{
//                     prev:++flag,
//                     value:32,
//                     next: {
//                         prev:++flag,
//                         value:543,
//                         next:null
//                     }
//                 }
//             }
//         }

//     }
// }

// let split=listFull.head;
// let s=0;
// while(s !==1){
//     split=split.next;
//     s++;
// }
// console.log(split);

let thinks = {
  fruits: ["apple", "orange", "banana"],
  family: ["julian", "sonnia", "leimar"],
};
console.table(thinks);

let pets = ["yoyo", "mike", "rufo", "sara", "nina", "tin"];
let datos = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < datos.length; i++) {
  let cadena = "";
  for (let j = 0; j < datos[i]; j++) {
    cadena += " * ";
  }
  if (pets[i]) {
    console.log(pets[i]);
  }
  console.log(cadena);
}

function llamada(nombre, cb) {
  setTimeout(() => {
    console.log("wellcome everythink");
  }, 2000);
  cb(nombre);
}

function camino(nombre) {
  setTimeout(() => {
    console.log("hola campeon! " + nombre);
  }, 1000);
}

llamada("danilo", camino);

console.log(":) -> ");

const funciones = {
  sumatoria: function sumatoria(n) {
    let aux = (n * (n + 1)) / 2;
    console.log(aux);
  },
  consecutivos: function sumatoriaTres(n) {
    let x = n + (n + 1) + (n + 2);
    console.log(x);
  },
  fibonacci: function fib(num) {
    let start = 0,
      find = 1,
      aux = 0,
      tem = 0,
      all = [];
    while (tem < num) {
      aux = start + find;
      start = find;
      find = aux;
      all[tem] = aux;
      tem++;
    }
    console.log(all);
  },
};
funciones.fibonacci(50);

let f = [1, 2, 3, 4, 5, 6, 7];
f.forEach((v, index) => {
  f[index] = v * v;
});
console.log(f);
