function sumar (valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function restar (valor1, valor2){
    const resultado = valor1 - valor2;
    return resultado;
}

function multiplicar (valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

function dividir ( valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

function calculadora () {
    operacion = prompt ("¿Qué operacion querés hacer? \n +: sumar \n  -: restar \n  *: multiplicar \n  /: dividir \n x: salir " )

    while (operacion !="x" && operacion!="salir"){ 
  
    switch( operacion){
        case "+":
            valor1 = parseInt (prompt ("Ingrese el primer número:"));
            valor2 = parseInt (prompt ("Ingrese el segundo número: "));
            alert ("El resultado de la operación es : " + sumar (valor1,valor2));
            operacion = prompt ("¿Qué operacion querés hacer? \n +: sumar \n  -: restar \n  *: multiplicar \n  /: dividir \n x: salir " )
            break;


        case "-":
            valor1 = prompt ("Ingrese el primer número:")
            valor2 = prompt ("Ingrese el segundo número: ")
            alert ("El resultado de la operación es : " + restar (valor1,valor2));
            operacion = prompt ("¿Qué operacion querés hacer? \n +: sumar \n  -: restar \n  *: multiplicar \n  /: dividir \n x: salir " )
            break;

        case"*":
            valor1 = prompt ("Ingrese el primer número:")
            valor2 = prompt ("Ingrese el segundo número: ")
            alert ("El resultado de la operación es : " + multiplicar (valor1,valor2));
            operacion = prompt ("¿Qué operacion querés hacer? \n +: sumar \n  -: restar \n  *: multiplicar \n  /: dividir \n x: salir " )
            break;
        
        case"/":
            valor1 = prompt ("Ingrese el primer número:")
            valor2 = prompt ("Ingrese el segundo número: ")
            alert ("El resultado de la operación es : " + dividir (valor1,valor2));
            operacion = prompt ("¿Qué operacion querés hacer? \n +: sumar \n  -: restar \n  *: multiplicar \n  /: dividir \n x: salir " )
            break;
        
        case"x":
            break;
            
        case"salir":
            break;

        default:
            alert("La operación ingresada es inválida.");
            operacion = prompt ("¿Qué operacion querés hacer? \n +: sumar \n  -: restar \n  *: multiplicar \n  /: dividir \n x: salir " )
            break;
        }
    }
}

