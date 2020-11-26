export default class App {

// Funcion de convertir pesos a euros o dolares
convertir(pesos) {
    let resultado;
    if (pesos < 0) {
        resultado = 0;
    } else {
        if (pesos < 2000) {
            resultado = pesos * 20.5;
        } else {
            resultado = pesos * 22.7;
        }
    }
    return resultado;
}

// Funcion de gasolina * kilometros
costoRenta(kilometros) {
    let resultado;
    if (kilometros < 0) {
        resultado = 0;
    } else {
        if (kilometros < 50) {
            resultado = kilometros * 3;
        } else {
            if (kilometros >= 50 && kilometros < 100) {
                resultado = kilometros * 5;
            } else {
                if (kilometros >= 100 && kilometros < 200) {
                    resultado = kilometros * 6;
                } else {
                    if (kilometros >= 200) {
                        resultado = kilometros * 6.5;
                    } else {
                        resultado = 'Algo salio mal'
                    }
                }
            }
        }
    }
    return resultado;
}

//Funcion de Circulacion de vehiculo
puedeCircular(dia, terminacion) {
    let resultado;
    switch (dia) {
        case 1:
            if (terminacion == 0 || terminacion > 2) {
                resultado = true;
            } else {
                resultado = false;
            }
            break;
            
        case 2:
            if (terminacion == 1 || terminacion > 2) {
                resultado = true;
            } else {
                resultado = false;
            }
            break;

        case 3:
            if (terminacion == 2 || terminacion > 2) {
                resultado = true;
            } else {
                resultado = false;
            }
            break;

        case 4:
            if (terminacion == 2 || terminacion > 2) {
                resultado = true;
            } else {
                resultado = false;
            }
            break;

        case 5:
            if (terminacion > 2) {
                resultado = true;
            } else {
                resultado = false
            }
            break;

        case 6:
            if (terminacion > 2) {
                resultado = true;
            } else {
                resultado = false
            }
            break;

        case 7:
            if (terminacion > 2) {
                resultado = true;
            } else {
                resultado = false
            }
            break;
    
        default:
            resultado = false;
            break;
    }


    return resultado;
}





} //Fin clas APP

let app = new App();

console.log('convertir function')
console.log(app.convertir(1999));
console.log(app.convertir(2000));

console.log('\ncostoRenta function')
console.log(app.costoRenta(-1));
console.log(app.costoRenta(5));
console.log(app.costoRenta(50));
console.log(app.costoRenta(100));
console.log(app.costoRenta(200));
console.log(app.costoRenta(250));

console.log('\n puedeCircular function')
console.log(app.puedeCircular(-1,2));
console.log(app.puedeCircular(1,1));
console.log(app.puedeCircular(1,4));