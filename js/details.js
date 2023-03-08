
const section = document.getElementById('sectionDetail');
/* console.log(location.search)
console.log(location.search.slice(1))
console.log(location.search.slice(1).split("=")) */

let params = JSON.parse(location.search.slice(1).split("=")[1]);
  
/* console.log( params); */

for(eventCard of data.events) {
    if(eventCard._id === params) {
        const card = document.createElement('div');
        card.classList = "card mb-3 colorCard"
        card.innerHTML=`
       
       
          <div class="row g-0">
            <div class="col-12 col-lg-6">
              <img src="${eventCard.image}" class="img-fluid rounded-start" alt="${eventCard.category}">
            </div>
            <div class="col-12 col-lg-6">
              <div class="card-body">
                <h5 class="card-title text-start">${eventCard.name}</h5>
                <p class="card-text text-start">${eventCard.description}</p>
                </div>
                <ul class="list-group list-group-flush colorCard">
                <li class="list-group-item colorCard">Category: ${eventCard.category}</li>
                <li class="list-group-item colorCard">Date: ${eventCard.date}</li>
                <li class="list-group-item colorCard">Place: ${eventCard.place}</li>
                <li class="list-group-item colorCard">Assistance: ${eventCard.assistance}</li>
                <li class="list-group-item colorCard">Capacity: ${eventCard.capacity}</li>
                <li class="list-group-item colorCard">Price: ${eventCard.price}</li>
                </ul>
                <div class="card-footer">
                  <a href="../pages/contact.html" class="btn btn-primary colorButtonCard">Contact us</a>
              </div>
            </div>
          </div>
       
        `
          section.appendChild(card);
          break; 
    }
}