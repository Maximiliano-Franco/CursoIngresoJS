function mostrar()
{
  let cant;
  let cantTotal = 0;
  let cantArena = 0;
  let cantCal = 0;
  let cantCemento = 0;
  let descuento;
  let precioIngresado;
  let precioArena = 0;
  let precioCal = 0;
  let precioCemento = 0;
  let precioBruto;
  let precioFinal;
  let producto;
  let productoMasCant;
  let productoMasCaro;
  let seguir;

  do {

    // Le dejo al usuario elejir el producto, la cantidad, y el precio a gusto


      producto = prompt("Ingrese producto: Arena, Cal, Cemento").toLowerCase();

              while(producto != "arena" && producto != "cal" && producto != "cemento"){
                producto = prompt("Error. Ingrese producto: Arena, Cal, Cemento").toLowerCase();
              }


      cant = parseInt(prompt("Ingrese cantidad"));
        
              while(cant == isNaN){
                cant = parseInt(prompt("Eso no es un numero. Ingrese cantidad"));
              }

            cantTotal += cant;


      precioIngresado = parseInt(prompt("Ingrese precio por bolsa"));

              while(precioIngresado == isNaN){
                precioIngresado = parseInt(prompt("Eso no es un numero. Ingrese precio por bolsa"));
              }



    // Sumo cantidad de bolsas y precio segun el producto          

      if (producto == "arena"){
        cantArena = cant;
        precioArena = precioIngresado * cantArena;
      }
      else if (producto == "cal"){
        cantCal = cant;
        precioCal = precioIngresado * cantCal;
      } 
      else {
        cantCemento = cant;
        precioCemento = precioIngresado * cantCemento;
      }



    // Le pregunto al usuario si quiere seguir ingresando productos

          seguir = prompt("Desea continuar introduciendo elementos? Introduzca S/N.")


  } while (seguir == "s" || seguir == "S")


  // Establezco el precio sin descuento

          precioBruto = precioArena + precioCemento + precioCal;



  // Establezo el precio con el descuento aplicado

          if(cantTotal > 0 && cantTotal < 10 ){
            descuento = 1;
            precioFinal = precioBruto * descuento;
          }

          else if (cantTotal >= 10 && cantTotal < 30){
            descuento = 0.15;
            precioFinal = precioBruto * descuento;
          }

          else if(cantTotal > 30){
            descuento = 0.25;
            precioFinal = precioBruto * descuento;
          }

          else {
            precioFinal = 0
          }



  // Establezco el producto con mas cantidad de bolsas

          if(cantArena > cantCal && cantArena > cantCemento){
            productoMasCant = "Arena";
          } 

          else if (cantCal > cantArena && cantCal > cantCemento){
            productoMasCant = "Cal";
          }

          else {
            productoMasCant = "Cemento";
          }



  // Establezo el Producto mas caro    

          if(precioArena > precioCal && precioArena > precioCemento){
            productoMasCaro = "Arena";
          } 

          else if (precioCal > precioArena && precioCal > precioCemento){
            productoMasCaro = "Cal";
          }

          else {
            productoMasCaro = "Cemento";
          }

    
  // Brindo datos al usuario

      alert("Cantidad de bolsas de arena: " + cantArena + "\n" + "Cantidad de bolsas de cal: " + cantCal + "\n" +
            "Cantidad de bolsas de cemento: " + cantCemento + "\n" + "Cantidad total de bolsas: " + cantTotal + "\n" +
            "El producto con mas cantidad de bolsas es: " + productoMasCant + "\n" +
            "El producto mas caro es: " + productoMasCaro + "\n" + "El precio bruto es: $" + precioBruto + "\n" +
            "El precio con descuento es: $" + precioFinal + "Porque se le esta aplicando " + descuento + "% de descuento");

}
