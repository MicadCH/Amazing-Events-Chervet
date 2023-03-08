const fechaBase = eventos.currentDate;
const pasados = [];

function passed(arreglo) {
  for (let i of eventos.events) {
    if (i.date < fechaBase) {
      i.description = `<p class="p-card">Finished </p> `;
      arreglo.push(i);
    }
  }
  return arreglo;
}
passed(pasados);

tarjetas = armadoGaleria(tarjetas, pasados);
contenedorTarjetas.innerHTML = tarjetas;
