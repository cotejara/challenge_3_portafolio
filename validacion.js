const formulario = document.getElementById('formulario');
const expresion ={email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/};
email = document.getElementById("email");
nombre = document.getElementById("nombre");
asunto = document.getElementById("asunto");
mensaje = document.getElementById("mensaje");
formatoemail=false;

function habilitar(e) {   
    val = 0;

    console.log("nombre.length", nombre.value.length);

    console.log("nombre", e.target.name);

    switch (e.target.name) { 
        case "email":
            if (expresion.email.test(e.target.value)) {
                formatoemail = true;
            } else{
                formatoemail = false;
            }
        break;
    }

    if ( 
        (nombre.value.length > 0) && (asunto.value.length > 0) && (mensaje.value.length > 0) && (email.value.length > 0)  
       )
     {
    
        val=4;
    }
    
    if (val==4) {
        document.getElementById("botonEnviar").disabled = false;
    } else {
        document.getElementById("botonEnviar").disabled = true;
    }
    console.log("val: " + val);
}

document.getElementById("nombre").addEventListener("keyup",habilitar);
document.getElementById("email").addEventListener("keyup",habilitar);
document.getElementById("asunto").addEventListener("keyup",habilitar);
document.getElementById("mensaje").addEventListener("keyup",habilitar);
document.getElementById("botonEnviar").addEventListener("click",() => {  
    if (formatoemail) {
        alert("Enviado!" )        
    };
    
}
);    

