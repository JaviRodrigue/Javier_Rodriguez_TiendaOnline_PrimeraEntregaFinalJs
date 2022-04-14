class Compras{
    
    constructor(){
        this.coste=0;
        this.carritoCompras=[];
        this.carritoComprasCoste=[]
        this.carritoProductoCoste=[200,200,200,200,250,350,550,2000,2500];
        this.carritoProductos=["Resident evil 0","Resident evil 1","Resident evil 2","Resident evil 3","Resident evil 4","Resident evil 5","Resident evil 6","Resident evil 7","Resident evil 8"];
    }

    agregarProducto(producto){
        for (let i = 0; i < this.carritoProductos.length; i++) {
            if(producto == i){
                this.carritoCompras.push(this.carritoProductos[i])
                this.carritoComprasCoste.push(this.carritoProductoCoste[i])
                alert("Producto agregado exitosamente")
            }
        }
    }

    mostrarCompra(){
        alert("Cargando productos")
        for (let p = 0;p < this.carritoCompras.length ;p++){
            alert(this.carritoCompras[p]+":$"+this.carritoComprasCoste[p])
        }
    }

    totalCompra(){
        const total = this.carritoComprasCoste.reduce((acumulador,elemento) => acumulador + elemento)
        let totalIva = (total * 0.21) + total
        alert("total a pagar: $"+total+"\nTotal a pagar mas Iva:$"+totalIva+"\ncantidad de articulos:"+this.carritoCompras.length+"("+this.carritoCompras+")\nPrecio Final:$"+totalIva)
        alert("Muchas por su compra. Vuelva Pronto")
    }

    simulador(){
        let seguir = prompt("Bienvenido a la tienda de R.E(Resident Evil). En esta tienda encontraras la lista de que nos queda en stock de los videojuegos de resident evil.\n¿Deseas entrar a nuestra tienda virtual?[si/no]")
        if (seguir =="si"){
            while(true){
                let catalogoCompra = parseInt(prompt("Bienvenido al Catalogo de la tienda. Si usted desea agregar un producto a su carrito, ingrese el codigo correspondoente(el numero)\n#0 Resident evil 0:$200\n#1 Resident evil 1:$200\n#2 Resident evil 2:$200\n#3 Resident evil 3:$200\n#4 Resident evil 4:$250\n#5 Resident evil 5:$350\n#6 Resident evil 6:$550\n#7 Resident evil 7:$2000\n#8 Resident evil 8:$2500"))
                if(!(catalogoCompra in this.carritoProductos)){
                    alert("Por favor ingrese el codigo del producto")
                    continue
                }
                this.agregarProducto(catalogoCompra);

                let comprar = prompt("¿Deseas seguir comprando?")
                if (comprar != "si"){break}
            }
            this.mostrarCompra();

            this.totalCompra();
        }
        alert("Muchas gracias por visitar nuestra tienda online")
    }
}

const compras1 = new Compras();
compras1.simulador();