document.getElementById("button-up").addEventListener("click", scrollUp);
var filtros = [];
function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
}

buttonUp = document.getElementById("button-up");
window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }

}

filter = function($event) {
    //ESTOS EVENTOS VIENEN DEL onchange QUE ESTA EN CADA ELEMENTO CHECKBOX (INDEX HTML)
    // para saber si un checkbox esta tildado o no, uso $event.checked
    // para saber el valor de cada checkbox, lo busco con $event.value, y ese valor viene del HTML que dice value="Food" por ej

    // primero me fijo si el checkbox fue checkeado o no
    if ($event.checked) {
        // fue checkado
        // agregando un valor en el filtro
        filtros.push($event.value);
    } else {
        // fue destildado
        // quitando un valor del filtro
        if (filtros.length > 0) {
            var index = filtros.findIndex(x => x === $event.value);
            // esto es lo mismo
            // var index = filtros.indexOf($event.value);
            filtros.splice(index, 1);

        }
    }
    if (filtros.length > 0) {
        //tengo filtros

        // hago un array aparte (array resultado) para lo que voy a mostrar, si no tengo filtros no hago este array
        var tarjetasFiltered = [];

        // recorro cada filtro (string) por separado y voy filtrando las categorias
        for (var filtro of filtros) {
            // al mismo tiempo recorro cada item segun la categoria filtrada
            for (var item of eventos.events.filter(x => x.category === filtro)) {
                // agrego dicho item a mi array resultado
                tarjetasFiltered.push(item);
            }
        }
        // con mi array resultado genero el nuevo innerHTML, que es un string
        var stringHTML = armadoGaleria(tarjetas, tarjetasFiltered);
        // aplico el string innerHTML a mi pagina
        contenedorTarjetas.innerHTML = stringHTML;

    } else {
        // no tengo filtros, muestro todo, vuelvo a mi base de datos original

        // armo mi innerHTML con mi base de datos original eventos.events
        tarjetas = armadoGaleria(tarjetas, eventos.events);
        // aplico el string innerTHML a mi pagina
        contenedorTarjetas.innerHTML = tarjetas;
    }
    
}