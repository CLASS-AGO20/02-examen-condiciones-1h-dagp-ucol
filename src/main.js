export default class App {

convertir(pesos) {
    let resultado;
    if (pesos < 0) {
        resultado = 0
    } else {
        if (pesos < 2000) {
            resultado = pesos * 20.5;
        } else {
            resultado = pesos * 22.7;
        }
    }
    return resultado;
}









} //Fin clas APP

let app = new App();

console.log(app.convertir(1999));
console.log(app.convertir(2000));