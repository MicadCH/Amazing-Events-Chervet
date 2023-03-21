// const url = "https://mindhub-xj03.onrender.com/api/amazing"
// fetch(url)
// .then(res => res.json())
// .then(dato => {
//     let events = dato.events
//     let eventCategory = events.map(ecategory => ecategory.category)
//     let filtByCategory = eventCategory.reduce0((a,e) => {
//         if(!a.includes(e)){
//             a.push(e)
//         }
//         return a
//     })},
//     [])


const queryString = location.search
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

let detallesEvento = eventos.events.find((event) => event._id == id);
console.log(detallesEvento);

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
                                        <p class="d-flex align-items-center">Date: ${detallesEvento.date}</p>
                                        <p class="d-flex align-items-center">Place: ${detallesEvento.place}</p>
                                        <p class="d-flex align-items-center">Capacity: ${detallesEvento.capacity}</p>
                                        <p class="d-flex align-items-center">Price: $${detallesEvento.price}</p>
                                        <a href="./index.html"><button type="button" class="btn btn-outline-secondary btn-card-det">Back</button></a>
                                    </div>
                                </div>                                
                            </div>
                        </div>`;
