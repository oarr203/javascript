let acumulado = 0;
let contador = 0;
let agregar = "si";
let cantidadTotal = 0;


const promedioEdad = (cantidad) => {
    do {
        if(contador !=0 ){
            cantidad = Number(prompt(" ingrese la cantidad de personas a incluir para calcular la edad promedio"));
        }
        for (let i = 1; i <= cantidad; i++) {
            let edad = Number(prompt("ingrese la edad de la persona numero " + (contador + 1)));
            alert("la edad registrada para la persona # " + (contador + 1) + " es: " + edad + " años");
            acumulado += edad;
            contador += 1
        }
        cantidadTotal += cantidad;
        let promedio = acumulado / cantidadTotal;
        alert("la edad promedio de las " + contador + " personas es de: " + promedio + " años");
        agregar = prompt("desea agregar mas personas? si/no");
        console.log(agregar);
    }
    while (agregar == "si");
}
let cantidadInicial = Number(prompt(" ingrese la cantidad inicial de personas a calcular la edad promedio "));

promedioEdad(cantidadInicial)