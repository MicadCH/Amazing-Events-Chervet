const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

let datosEventos;
let currentDate;

async function traerLosDatos() {
  try {
    const eventos = await fetch(urlApi)
      .then((response) => response.json())
      .then((data) => data);

    datosEventos = eventos.events;
    datosFecha = eventos.currentDate;
    detailsInitializer();
  } catch (error) {
    console.log(error);
  }
}

traerLosDatos();

function detailsInitializer() {
  const detallesEvento = datosEventos.find((event) => event._id == id);
  createCard();
  function createCard() {
    const divDetails = document.getElementById("divDetails");

    card = ` <div class="row d-flex align-items-center">
                            <div class="col-md-6 d-flex justify-content-center">
                                <figure class="figure">
                                    <img src=${detallesEvento.image} class="figure-img img-detail img-fluid rounded" alt="default image">
                                    <figcaption class="figure-caption">Event Category: ${detallesEvento.category}</figcaption>
                                </figure>
                            </div>
                            <div class="col-md-6 d-flex justify-content-center">
                                <div class="description-detail m-3">
                                    <h2 class="text-center">${detallesEvento.name}</h2>
                                    <div class="description">
                                        <p class="text-justify">${detallesEvento.description}</p>
                                        <p class="d-flex align-items-center">Date: ${detallesEvento.date}</p>
                                        <p class="d-flex align-items-center">Place: ${detallesEvento.place}</p>
                                        <p class="d-flex align-items-center">Capacity: ${detallesEvento.capacity}</p>
                                        <p class="d-flex align-items-center">Price: $${detallesEvento.price}</p>
                                        <a href="./index.html"><button type="button" class="btn btn-outline-secondary btn-card-det">Back</button></a>
                                    </div>
                                </div>                                
                            </div>
                        </div>`;
    divDetails.innerHTML = card;
  }
}
