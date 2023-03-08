const fechaBase = eventos.currentDate;

function passed() {
  let pasados = [];
  for (let i of eventos.events) {
    if (i.date > fechaBase) {

      pasados.push(i);
    }
  }
  return pasados;
}
const filtradoFuturo = passed();
contenedorTarjetas.innerHTML = armadoGaleria(filtradoFuturo);


//cambiar nombre xD