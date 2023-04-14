function pruebaDigimon(){

    //Extraer nombre

    let consultarDigimon = document.getElementById('nombreProporcionado').value;

    //configuramos el endpoint para consultar
    let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/' +consultarDigimon;

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