const fechaBase = eventos.currentDate;
const e = eventos.events;

const todos = [];
function probando(arreglo) {
    for (let i of e) {
        if (i.date < fechaBase) {

            i.description = `<p class="p-card">Finished </p> `;

        }
        arreglo.unshift(i);
    }
    return arreglo;
}
probando(todos);

/*--- TARJETAS PRUEBAS ---*/

tarjetas = armadoGaleria(tarjetas, todos);
contenedorTarjetas.innerHTML = tarjetas;


/*--- CONSOLE.LOG CATEGORIAS ---*/

const categorias = [];
for (let i of eventos.events) {
    if (!categorias.includes(i.category))
        categorias.push(i.category);
}
console.log(categorias)