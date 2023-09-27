// Andamio para resolver problemas de Acepta el Reto

console.log('Script cargado correctamente.')

let ficheros = ['entrada.csv']

// Carga de ficheros de datos de entrada
ficheros.forEach( fichero => {
	fetch(fichero)	//Carga el ficherito
		.then(respuesta => respuesta.text())	//Saca el texto
		.then(funcion1)		//pasa el texto a funcion1
})

function funcion1(entrada){
    if(entrada==0){
        console.log("El fichero esta vacio")
        return
    }
    
	//console.log(entrada)
    let primerPaso = entrada.split("\n")
    if(primerPaso<"A" || primerPaso>"Ñ"){
        console.log("Archivo alterado")
        return
    }
    //console.log(primerPaso)

    let numeroLineas = primerPaso.length
    //console.log(numeroLineas)

    for(let j=0;j<numeroLineas;j++)
    {
        let sinComillas = primerPaso[j].replace(/['"]+/g, '')
        //console.log(sinComillas)
        let separado = sinComillas.split(",")
        //console.log(separado)

        //console.log(separado[0]+": "+separado[1]+", "+separado[2])
        //console.log(separado.length)
        let salida = separado[0]+": ";
        let arrayExtra = [separado[0]]
        let arrayInterior = []
        for(let i=1;i<separado.length;i++){
            if(separado[i+1])
            salida = salida + separado[i]+", "
        else
            //console.log("no existe siguiente")
            salida = salida + separado[i]
        arrayInterior[i-1] = separado[i]
        }
        console.log(salida)
        //console.log(arrayInterior)
        arrayExtra[1] = arrayInterior
        console.log(arrayExtra)
        let miObjeto = {}

        for (let i = 0; i < arrayExtra.length; i++) {
            miObjeto[i] = arrayExtra[i];
          }
        
        console.log(miObjeto);
        let salidaJson = JSON.stringify(miObjeto)
        console.log(salidaJson);

    }
    
}
