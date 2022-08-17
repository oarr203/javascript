class Productos{
    constructor(articulo, valor, cantidad){
        this.articulo=articulo;
        this.valor=Number(valor);
        this.cantidad=Number(cantidad);
    }
    
    valorIva(){return this.valor*=1.19}
    valorTotal(){return this.valor*=this.cantidad}

}

let adicionar = "si";
const Articulos=[];


while(adicionar =="si"||adicionar =="SI"){
    let articulo = prompt("Por favor ingrese el articulo a comprar");
    let valor = prompt("Por vafor ingrese el valor del articulo");
    let cantidad = prompt("Por favor ingrese la cantidad");

    Articulos.push(new Productos(articulo,valor,cantidad));
    adicionar = prompt("Desea agregar otro articulo si/no?")

    while(adicionar !="si" && adicionar!="SI" && adicionar!="no" && adicionar!="NO"){
        adicionar = prompt("Ha ingresado una respuesta incorrecta, por favor digite si o no")
    }

}

const precioArticulos = Articulos.map(datos=> datos.valor*1.19*datos.cantidad );
console.log(precioArticulos);

const valorInical =0;
const precioTotal = precioArticulos.reduce((acumulador,element)=>
acumulador + element,valorInical);

console.log("el costo total de la compra es: "+precioTotal);




//const producto1=new Productos("plancha",4000,2);


//console.log(producto1.valorIva());
//console.log(producto1.valorTotal());