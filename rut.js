
document.getElementById("rut").addEventListener("blur", (e) => {
	const rut = parseInt( document.getElementById("rut").value );
  
  // NaN (not a number) 
  if( isNaN(rut) ) {
  	// es que hay un error en lo que introdujo el usuario
      document.getElementById("feedback-rut").classList.remove("d-none");
  }
  
  if( rut > 999999 && rut < 40000000) {
    document.getElementById("feedback-rut").classList.add("d-none")
    // es válido 
  } else {
  	// NO es válido 
      document.getElementById("feedback-rut").classList.remove("d-none");
  }
});

document.getElementById("dv").addEventListener("blur", (e) => {
    const dv = document.getElementById("dv").value;
    const permitidos = ['0', '1','2','3','4','5','6','7','8','9','k','K'];
  
  if( !permitidos.includes(dv) ) {
  	// muestro mensaje de error
      document.getElementById("feedback-rut").classList.remove("d-none");
  }
  else {
    document.getElementById("feedback-rut").classList.add("d-none")

  }
});

document.getElementById("nombre").addEventListener("blur", (e) => {
	const nombre = document.getElementById("nombre").value;
    const expresionRegular = /^[a-z/A-Z]{1,30}$/;
  
    if( !expresionRegular.test(nombre) ) {
  	// mostrar mensaje error 
      document.getElementById("feedback-nombre").classList.remove("d-none");
    }
    else {
      document.getElementById("feedback-nombre").classList.add("d-none")
  }
});

document.getElementById("apellido").addEventListener("blur", (e) => {
	const apellido = document.getElementById("apellido").value;
    const expresionRegular = /^[a-z/A-Z]{1,30}$/;
  
    if( !expresionRegular.test(apellido) ) {
  	// mostrar mensaje error 
      document.getElementById("feedback-apellido").classList.remove("d-none");
    }
    else {
      document.getElementById("feedback-apellido").classList.add("d-none")
  }
});

document.getElementById("direccion").addEventListener("blur", (e) => {
	const direccion = document.getElementById("direccion").value;
    const expresionRegular = /[a-z/A-Z/0-9]{1,80}$/;
    
  
    if( !expresionRegular.test(direccion) ) {
  	// mostrar mensaje error 
      document.getElementById("feedback-direccion").classList.remove("d-none");
    }
    else {
      document.getElementById("feedback-direccion").classList.add("d-none")
  }
});


clientes.addEventListener('submit', (e) => {
	e.preventDefault();
    const next = e.currentTarget

    if( next.addEventListener)
        window.location = "vehiculos.html";
})











