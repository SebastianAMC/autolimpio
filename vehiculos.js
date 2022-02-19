document.getElementById("marca").addEventListener("blur", (e) => {
	const marca = document.getElementById("marca").value;
    const expresionRegular = /^[a-z/A-Z]{1,30}$/;
  
    if( !expresionRegular.test(marca) ) {
  	// mostrar mensaje error 
      document.getElementById("feedback-marca").classList.remove("d-none");
    }
    else {
      document.getElementById("feedback-marca").classList.add("d-none")
  }
});

document.getElementById("modelo").addEventListener("blur", (e) => {
	const modelo = document.getElementById("modelo").value;
    const expresionRegular = /^[a-z/A-Z]{1,30}$/;
  
    if( !expresionRegular.test(modelo) ) {
  	// mostrar mensaje error 
      document.getElementById("feedback-modelo").classList.remove("d-none");
    }
    else {
      document.getElementById("feedback-modelo").classList.add("d-none")
  }
});

vehiculos.addEventListener('submit', (e) => {
	e.preventDefault();
    const next = e.currentTarget

    if( next.addEventListener)
        window.location = "servicios.html";
        

})

