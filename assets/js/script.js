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
   let boton = document.getElementById('botonDigimon')

   function mostrarLista (datos){
    
    lista.innerHTML = "";

    for(let temp of datos)
        lista.innerHTML+=
   `
        <option value="">${temp.name}</option>
   `
    
   }
}



