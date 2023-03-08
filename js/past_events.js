const fechaBase = eventos.currentDate;

function passed() {
  let pasados = [];
  for (let i of eventos.events) {
    if (i.date < fechaBase) {
      i.description = `<p class="p-card">Finished </p> `;
      pasados.push(i);
    }
  }
  return pasados;
}

const filtradoPasado = passed();
contenedorTarjetas.innerHTML = armadoGaleria(filtradoPasado);
