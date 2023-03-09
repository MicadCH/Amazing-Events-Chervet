const fechaBase = eventos.currentDate;
let dataInput = "";
let arrayUpcoming = [];

const categoriasCheck = document.getElementById("container-check");
const searchbar = document.getElementById("buscador");
const categorysfilter = datosEventos.map((eventos) => eventos.category);
const galeria = document.getElementById("galeria");
const category = categorysfilter.reduce((c, e) => {
  if (!c.includes(e)) {
    c.push(e);
  }
  return c;
}, []);

function crearCategorias(evento) {
  let eventoCategoria = "";
  for (x of evento) {
    eventoCategoria += `  <label class="label">
    <input class="input" type="checkbox" name="${x}" id="${x}" value="${x}">${x}</label>`;
  }
  categoriasCheck.innerHTML = eventoCategoria;
}
crearCategorias(category);

let almacenaCheck = [];

categoriasCheck.addEventListener("click", (e) => {
  if (e.target.checked) {
    almacenaCheck.push(e.target.value);
  } else {
    almacenaCheck = almacenaCheck.filter(
      (noCheckeado) => noCheckeado !== e.target.value
    );
  }

  render();
});

/// funcion curzada

/// barra busqueda

let escucha = "";
searchbar.addEventListener("keyup", (s) => {
  escucha = s.target.value.toLowerCase();
  render();
});

//muestra las cartas


function upcoming() {
  for (let i of datosEventos) {
      if (i.date > fechaBase) {
          arrayUpcoming.push(i);
      }
  }   return arrayUpcoming;  
}
upcoming();



function createcardsUpcoming(array) {
  upcomingEvents = array.filter((e) => e.date > datosFecha);

  console.log(upcomingEvents);
  console.log(array.date);
  console.log(datosFecha);

  let cadena = "";
  for (let uno of upcomingEvents) {
    cadena += `<div class="col-12 col-md-5 col-lg-3 card" >
                        <div class="card-header">
                            <img src="${uno.image}" class="card-img-top" alt="${uno.name}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${uno.name}</h5>
                            <p class="card-text">${uno.description}</p>                                                       
                        </div>
                        <div class="card-footer px-2">
                        <span class="s-card">Price: $ ${uno.price}</span>
                            <a href="./details.html?id=${uno._id}" class="btn btn-outline-secondary btn-card">Details</a>
                        </div>
                </div>`;
  }
  return cadena;
  
}

function render() {
  let filtradorCheck = datosEventos.filter((c) =>
    almacenaCheck.includes(c.category)
  );

  let filtroBusqueda = datosEventos.filter(
    (s) =>
      s.category.toLowerCase().includes(escucha) ||
      s.name.toLocaleLowerCase().includes(escucha)
  );

  if (filtroBusqueda.length > 0) {
    galeria.innerHTML = createcardsUpcoming(filtroBusqueda);
    let controlador = filtroBusqueda.filter((fb) =>
      fb.category.includes(almacenaCheck.toString())
    );
    galeria.innerHTML = createcardsUpcoming(controlador);
  } else if (filtroBusqueda.length == 0) {
    galeria.innerHTML = `<img src="./assets/error-404.png" class="img-404" alt="">`;
  }
  if (filtradorCheck.length > 0) {
    galeria.innerHTML = createcardsUpcoming(filtradorCheck);
    let cfinal = filtradorCheck.filter((fc) =>
      fc.name.toLowerCase().includes(escucha.toString())
    );
    galeria.innerHTML = createcardsUpcoming(cfinal);
  } 
}
createcardsUpcoming(datosEventos);
render();
