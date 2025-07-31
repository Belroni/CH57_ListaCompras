const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){ //Valida la cantidad que se ingresa, en caso de no ser asi dirige a un mensaje de error dependiendo el caso
    if(txtNumber.value.length==""){ //txtNumber.value==""
        return false;
    }//Tenga información

    if(isNaN(txtNumber.value)){
        return false;
    }// Tiene que ser un número
    
    if (Number(txtNumber.value)<=0){//Constructor del objeto number
        return false;
    }// Mayor que 0
    
    return true;
}//ValidarCantidad

//3. Crear un precio por producto al azar
function getPrecio(){
    return Math.round(Math.random() *1000) / 100;
}//getPrecio

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();

    //Limpia la alerta cada que cambiemos el texto y la cantidad
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    
    txtName.style.border=""; //para modificar el borde 
    txtNumber.style.border=""; //para modificar el borde 
    //Name
    //validar que tenga información minimo 3 letras
    if(txtName.value.length<3){
        txtName.style.border="medium red solid"; //cambia el color del borde de la casilla
        
        //mensaje de error si es menor que 3
        alertValidacionesTexto.innerHTML="<strong>El nombre del producto no es correcto. </strong>";
        alertValidaciones.style.display="block";
    }//<3

    if(! validarCantidad()){
        txtNumber.style.border="medium red solid"; //cambia el color del borde de la casilla
        alertValidacionesTexto.innerHTML += //el += le agrega el segundo mensaje de error
                    "<strong>La cantidad no es correcto. </strong>";
        alertValidaciones.style.display="block";
    }//! ValirdarCantidad

    //Number
    //tenga información
    //tiene que ser un número
    // mayor que 0


}); //btnAgregar click