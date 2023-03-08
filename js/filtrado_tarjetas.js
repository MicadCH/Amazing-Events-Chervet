filter = function ($event) {
  if ($event.checked) {
    filtros.push($event.value);
  } else {
    if (filtros.length > 0) {
      var index = filtros.findIndex((x) => x === $event.value);
      filtros.splice(index, 1);
    }
  }
  if (filtros.length > 0) {
    var tarjetasFiltered = [];

    for (var filtro of filtros) {
      for (var item of eventos.events.filter((x) => x.category === filtro)) {
        tarjetasFiltered.push(item);
      }
    }
    var stringHTML = armadoGaleria(tarjetas, tarjetasFiltered);
    contenedorTarjetas.innerHTML = stringHTML;
  } else {
    tarjetas = armadoGaleria(tarjetas, eventos.events);
    contenedorTarjetas.innerHTML = tarjetas;
  }
};
