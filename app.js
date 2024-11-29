// Escribe tu código aquí.
//array de palabras
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio','gato','iguana','aguila'];

//funcion que reciba dos parametros
function bigWords(str,array){
    return array.filter(word => word.length>str.length);
}

//Función que reciba por parámetros un array de strings y lo imprima dentro de la lista de html

function printArray(arr){
    const palabras = document.getElementById("lista-palabras");
    
    palabras.innerHTML="";

    arr.forEach(word => { const li = document.createElement("li");
        
        li.textContent=word;

        palabras.appendChild(li);
        
    });
}

document.getElementById("enviar").addEventListener("click",() =>) {
    const usuario= document.getElementById("buscador").value;
    
    const result = bigWords(usuario,myArray);

    printArray(result);
}

