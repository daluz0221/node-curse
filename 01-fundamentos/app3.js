

const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' ');


// mètodo creado por chatgpt
function contarCadenasRepetidas(lista, cadena) {
    // Escapar caracteres especiales en la cadena para usarla en la expresión regular
    const cadenaEscapada = cadena.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  
    // Crear una expresión regular para buscar la cadena
    const regex = new RegExp(cadenaEscapada, 'ig');
  
    // Usar el método match() para encontrar todas las coincidencias
    const coincidencias = lista.join(',').match(regex);
  
    // Contar el número de coincidencias
    const conteo = coincidencias ? coincidencias.length : 0;
  
    return conteo;
  }

  const cadenaABuscar = "react";
  const conteo = contarCadenasRepetidas(wordCount, cadenaABuscar);

// mètodo creado por fernando
const reactWordCount = wordCount.filter( word => word.toLowerCase() === 'react' ).length

//metodo creado por fernando
const newReactWord = content.match(/react/gi).length;

console.log('palabras: ', wordCount.length);
console.log('palabras React con chatgpt: ', conteo);
console.log('palabras React con fercho mal: ', reactWordCount);
console.log('palabras React con fercho bien: ', newReactWord);



