





document.getElementById('boton-resumen').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtener la cantidad ingresada
    var cantidad = parseInt(document.getElementById('inputCantidad').value);
  
    // Obtener la categoría seleccionada
    var categoria = document.getElementById('inputCategoria').value;
  
    // Realizar el cálculo del descuento según la categoría
    var descuento = 0;
    if (categoria === 'Estudiante') {
      descuento = 0.8; // 80% de descuento
    } else if (categoria === 'Trainee') {
      descuento = 0.5; // 50% de descuento
    } else if (categoria === 'Junior') {
      descuento = 0.15; // 15% de descuento
    }
  
    // Calcular el total a pagar
  var valorTicket = 200;
  var total = 0;

  if (isNaN(cantidad) || cantidad <= 0) {
    // Mostrar mensaje de error si no se ingresa una cantidad válida
    document.getElementById('totalAPagar').textContent = 'Ingrese una cantidad válida de tickets';
  } else {
    total = cantidad * valorTicket * (1 - descuento);

    // Mostrar el total a pagar en el elemento correspondiente
    document.getElementById('totalAPagar').textContent = 'Total a Pagar: $' + total.toFixed(2);
  }
});
  

  document.getElementById('boton-borrar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Limpiar los campos del formulario
    document.getElementById('inputEmail4').value = '';
    document.getElementById('inputPassword4').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputCantidad').value = '';
    document.getElementById('inputCategoria').selectedIndex = 0;
  
    // Restaurar el valor predeterminado del total a pagar
    document.getElementById('totalAPagar').textContent = 'Total a Pagar: $';
  });
  