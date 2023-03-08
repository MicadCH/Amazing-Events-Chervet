const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detallesEvento = eventos.events.find((events) => events._id == id);

const divDetails = document.getElementById("divDetails");

divDetails.innerHTML = ` <div class="row d-flex align-items-center">
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
                                        <p class="d-flex align-items-center">${dateIcon} Date: ${detallesEvento.date}</p>
                                        <p class="d-flex align-items-center">${locationIcon} Place: ${detallesEvento.place}</p>
                                        <p class="d-flex align-items-center">${userIcon} Capacity: ${detallesEvento.capacity}</p>
                                        <p class="d-flex align-items-center">${tagIcon} Price: $${detallesEvento.price}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>`;
