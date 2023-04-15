function desplegarLista(){

   //consumo el endpoint con fetch
   fetch('https://digimon-api.vercel.app/api/digimon')

   //Recibimos la respuesta de la api y la convertimos a json
   .then(response => response.json())

   //Recibe los datos transformados para ser manipulados
   .then( datos => {

    mostrarLista(datos);


   })

   var lista = document.querySelector('#formDigimon')

   function mostrarLista (datos){
    
    lista.innerHTML = "";

    for(let temp of datos)
        lista.innerHTML+=
   `
        <option onclick="pruebaDigimon('${temp.name}')" value="">${temp.name}</option>
   `
    
   }
}

function pruebaDigimon(nameDigimon){

    //Extraer nombre

    //let consultarDigimon = document.getElementById('nombreProporcionado').value;

    //configuramos el endpoint para que reciba un nombre
    let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/' +nameDigimon;

    //consumo el endpoint con fetch
   fetch(endpoint)

   //Recibimos la respuesta de la api y la convertimos a json
   .then(response => response.json())

   //Recibe los datos transformados para ser manipulados
   .then( datos => {

    let nombreDigimon = datos[0].name;
    let imagen = datos[0].img;
    let levelDigimon = datos[0].level;

    let cambiarNombre = document.getElementById('nombreDigimon');
    cambiarNombre.innerHTML = nombreDigimon;

    let cambiarimagen = document.getElementById('imagenDigimon');
    cambiarimagen.src = imagen;

    let cambiarNivel = document.getElementById('parrafoNivel');
    cambiarNivel.innerHTML = "Nivel: " +levelDigimon;



   })

    

}


