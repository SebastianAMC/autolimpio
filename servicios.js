const boton = document.getElementById("calcular");

boton.addEventListener("click", () => {
    
    const lavadoExterior    = $("#exterior").prop("checked");
    const lavadoMotor       = $("#motor").prop("checked");

    // creo variable para hacer cálculo
    let montoNeto           = 0;

    if( lavadoExterior ) {
        montoNeto = montoNeto + 7000;
    }

    if( lavadoMotor ) {
        montoNeto = montoNeto + 5000;
    }

    // cálculo impuesto y total 
    const impuesto  = montoNeto * 0.19;
    const total     = montoNeto + impuesto;

    // cargo los datos a pantalla 
    document.getElementById("neto").innerHTML   = `<span>$ ${montoNeto}</span>`;
    document.getElementById("iva").innerHTML    = `<span>$ ${impuesto}</span>`;
    document.getElementById("total").innerHTML  = `<span>$ ${total}</span>`;
});


servicios.addEventListener('submit', (e) => {
	e.preventDefault();
    const enviar = e.currentTarget

    if( enviar.addEventListener)
        alert("Datos enviados con éxito");
        document.getElementById("servicios").reset();
        document.getElementById("neto").innerHTML = `<span>$ </span>` ;
        document.getElementById("iva").innerHTML= `<span>$ </span>`;
        document.getElementById("total").innerHTML= `<span>$ </span>`;
        window.location = "index.html"
})




