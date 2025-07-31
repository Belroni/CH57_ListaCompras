const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById(
    "alertValidacionesTexto"
);
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);

const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");

let cont = 0; //Contador
let costoTotal = 0; //contador de la tabla
let totalEnProductos = 0;

function validarCantidad() {
  //Valida la cantidad que se ingresa, en caso de no ser asi dirige a un mensaje de error dependiendo el caso
    if (txtNumber.value.length == 0) {
    //txtNumber.value==""
    return false;
    } //Tenga información

    if (isNaN(txtNumber.value)) {
        return false;
    } // Tiene que ser un número

    if (Number(txtNumber.value) <= 0) {
        //Constructor del objeto number
        return false;
    } // Mayor que 0

    return true;
    } //ValidarCantidad

//3. Crear un precio por producto al azar
function getPrecio() {
  return Math.round(Math.random() * 10000) / 100;
} //getPrecio

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();

    let isValid = true; //valida la información y si no se cumple el if, es false

    //Limpia la alerta cada que cambiemos el texto y la cantidad
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    txtName.style.border = ""; //para modificar el borde
    txtNumber.style.border = ""; //para modificar el borde
    //Name
    //validar que tenga información minimo 3 letras
    if (txtName.value.length < 3) {
        txtName.style.border = "medium red solid"; //cambia el color del borde de la casilla

    //mensaje de error si es menor que 3
        alertValidacionesTexto.innerHTML =
                                        "<strong>El nombre del producto no es correcto. </strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } //<3

    if (!validarCantidad()) {
        txtNumber.style.border = "medium red solid"; //cambia el color del borde de la casilla
        alertValidacionesTexto.innerHTML += //el += le agrega el segundo mensaje de error
        "<strong>La cantidad no es correcto. </strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } //! ValidarCantidad

    if (isValid) {
        //Agregar los elementos a la tabla
        cont++;
        let precio = getPrecio();
        let row = `<tr>
                            <td>${cont}</td>
                            <td>${txtName.value}</td>
                            <td>${txtNumber.value}</td>
                            <td>${precio}</td>
                        </tr>
            `;

    cuerpoTabla.insertAdjacentHTML("beforeend", row); //se agrega al final de la tabla}
    
    // 4. Realizar las operaciones para conocer el total de elementos
    contadorProductos.innerText = cont; //es el resumen de la compra
    totalEnProductos += Number(txtNumber.value); //con el constructor lo convertimos de string a numero
    productosTotal.innerText = totalEnProductos;
    costoTotal += precio * Number(txtNumber.value);
    //costoTotal.toFixed(2) forma facíl de redondear
    precioTotal.innerText = new Intl.NumberFormat("es-MX", {
        style: "currency", currency: "MXN"
    }).format(costoTotal); 

    txtName.value = ""; //limpia el campo
    txtNumber.value = ""; //limpia el campo
    txtName.focus(); //focus llega al campo de nuevo para volver a escribir
    } //isValid

    //Number
    //tenga información
    //tiene que ser un número
    // mayor que 0
}); //btnAgregar click
