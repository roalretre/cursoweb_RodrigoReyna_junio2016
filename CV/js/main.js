



var correo="gusanito@abc";
var password="gusanito";

$(document).on("ready",enviar);

function enviar(){
	$('#enviar').on("click", validar)

}

function validar(){
	user=$('#usuario').val();
	email=$('#pass').val();
	if(user==correo&&email==password){
		alert("SESION INICIADA");
		window.location = "../CV/indexCV.html";
	}
	else
		alert("ERROR DE INICIO")
}




