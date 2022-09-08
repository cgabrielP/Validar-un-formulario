let formulario = document.getElementById("myForm");

formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  // número tarjeta
  let numeroTarjeta = formulario.inputCard;
  let regexTarjeta = /^[0-9]{12,16}$/;

  if (numeroTarjeta.value === "") {
    numeroTarjeta.classList.add("is-invalid");
  } else if (!regexTarjeta.test(numeroTarjeta.value)) {
    numeroTarjeta.classList.add("is-invalid");
  } else {
    numeroTarjeta.classList.remove("is-invalid");
    numeroTarjeta.classList.add("is-valid");
  }

  //CVC
  let seguridadNumeros = formulario.inputCVC;
  let regexCVC = /^[0-9]{3}$/;

  if (seguridadNumeros.value === "") {
    seguridadNumeros.classList.add("is-invalid");
  } else if (!regexCVC.test(seguridadNumeros.value)) {
    seguridadNumeros.classList.add("is-invalid");
  } else {
    seguridadNumeros.classList.remove("is-invalid");
    seguridadNumeros.classList.add("is-valid");
  }
  //monto
  let monto = formulario.inputAmount;
  let regexMonto = /^[0-9]{3,6}$/;

  if (monto.value === "") {
    monto.classList.add("is-invalid");
  } else if (!regexMonto.test(monto.value)) {
    monto.classList.add("is-invalid");
  } else {
    monto.classList.remove("is-invalid");
    monto.classList.add("is-valid");
  }
  //Primer nombre
  let nombre = formulario.inputFirstName;
  let regexNombre = /^[a-zA-Z]{2,20}$/;

  if (nombre.value === "") {
    nombre.classList.add("is-invalid");
  } else if (!regexNombre.test(nombre.value)) {
    nombre.classList.add("is-invalid");
  } else {
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
  }
  //apellido
  let apellido = formulario.inputLastName;
  let regexApellido = /^[a-zA-Z]{2,30}$/;

  if (apellido.value === "") {
    apellido.classList.add("is-invalid");
  } else if (!regexApellido.test(apellido.value)) {
    apellido.classList.add("is-invalid");
  } else {
    apellido.classList.remove("is-invalid");
    apellido.classList.add("is-valid");
  }
  //city
  let ciudad = formulario.inputCity;
  let regexCiudad = /^[a-zA-Z]{2,10}$/;

  if (ciudad.value === "") {
    ciudad.classList.add("is-invalid");
  } else if (!regexCiudad.test(ciudad.value)) {
    ciudad.classList.add("is-invalid");
  } else {
    ciudad.classList.remove("is-invalid");
    ciudad.classList.add("is-valid");
  }
  let estado = formulario.inputState;
  let regexEstado = /^[a-zA-Z]{2,10}$/;

  if (!regexEstado.test(estado.value)) {
    estado.classList.add("is-invalid");
  } else {
    estado.classList.remove("is-invalid");
    estado.classList.add("is-valid");
  }
  //zip
  let postalCode = formulario.inputZip;
  let regexPostalCode = /^[0-9]{7}$/;

  if (postalCode.value === "") {
    postalCode.classList.add("is-invalid");
  } else if (!regexPostalCode.test(postalCode.value)) {
    postalCode.classList.add("is-invalid");
  } else {
    postalCode.classList.remove("is-invalid");
    postalCode.classList.add("is-valid");
  }
  //mensaje
  let comentarios = formulario.floatingTextarea2;
  let regexComentarios = /^[0-9A-Za-z]{0,50}$/;

  if (comentarios.value === "") {
    comentarios.classList.add("is-invalid");
  } else if (!regexComentarios.test(comentarios.value)) {
    comentarios.classList.add("is-invalid");
  } else {
    comentarios.classList.remove("is-invalid");
    comentarios.classList.add("is-valid");
  }
});
