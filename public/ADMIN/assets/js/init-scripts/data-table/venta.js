// Variables globales
let ventas = [];
let indiceFilaActual = -1;

// Función para agregar una fila a la tabla
function agregarFilaTabla(venta) {
  // Crear una nueva fila
  const nuevaFila = document.createElement('tr');
  nuevaFila.dataset.idVenta = venta.idVenta; // Agregar data-idVenta attribute

  // Agregar las celdas a la fila
  nuevaFila.appendChild(crearCelda(venta.fechaVenta));
  nuevaFila.appendChild(crearCelda(venta.idVenta));
  nuevaFila.appendChild(crearCelda(venta.idCliente));
  nuevaFila.appendChild(crearCelda(venta.estadoVenta));
  nuevaFila.appendChild(crearCelda(venta.montoTotal));

  // Agregar la fila a la tabla
  document.getElementById('tablaVentas').getElementsByTagName('tbody')[0].appendChild(nuevaFila);
}

// Función para agregar una nueva venta
function agregarVenta(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const fechaVenta = document.getElementById('fechaVenta').value;
  const idVenta = document.getElementById('idVenta').value;
  const idCliente = document.getElementById('idCliente').value;
  const estadoVenta = document.getElementById('estadoVenta').value;
  const montoTotal = document.getElementById('montoTotal').value;

  // Validar los datos (opcional)

  // Crear un objeto con los datos de la nueva venta
  const nuevaVenta = {
    fechaVenta,
    idVenta,
    idCliente,
    estadoVenta,
    montoTotal,
  };

  // Agregar la nueva venta al array
  ventas.push(nuevaVenta);

  // Agregar la nueva fila a la tabla
  agregarFilaTabla(nuevaVenta);

  // Restablecer el formulario (opcional)
}

// Función para eliminar una venta
function eliminarVenta() {
  const indiceFilaSeleccionada = indiceFilaActual;

  if (indiceFilaSeleccionada === -1) {
    alert('Debe seleccionar una fila para eliminar');
    return;
  }

  const idVentaEliminar = ventas[indiceFilaSeleccionada].idVenta;

  // Eliminar la venta del array
  ventas = ventas.filter((venta) => venta.idVenta !== idVentaEliminar);

  const tablaVentas = document.getElementById('tablaVentas');
  tablaVentas.getElementsByTagName('tbody')[0].removeChild(tablaVentas.rows[indiceFilaSeleccionada]);

  // Restablecer el índice de la fila actual
  indiceFilaActual = -1;
}

// Función para filtrar datos en la tabla
function filtrarDatosTabla(valor) {
  const filasTabla = document.getElementById('tablaVentas').getElementsByTagName('tbody')[0].rows;

  for (let i = 0; i < filasTabla.length; i++) {
    const fila = filasTabla[i];
    const idVenta = fila.dataset.idVenta;
    const nombreCliente = fila.cells[2].textContent;

    // Mostrar u ocultar la fila según el valor de búsqueda
    fila.style.display = valor
      ? (idVenta.includes(valor) || nombreCliente.toLowerCase().includes(valor.toLowerCase()))
        ? ''
        : 'none'
      : '';
  }
}

// Función para crear una celda con el texto especificado
function crearCelda(texto) {
  const celda = document.createElement('td');
  celda.textContent = texto;
  return celda;
}

// Función para seleccionar una fila
function seleccionarFila(indiceFila) {
  indiceFilaActual = indiceFila;

  // Resaltar la fila seleccionada (opcional)
  const filasTabla = document.getElementById}
