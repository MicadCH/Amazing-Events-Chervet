const url = "https://mindhub-xj03.onrender.com/api/amazing";
fetch(url)
  .then((response) => response.json())
  .then((dato) => {

    const events = dato.events;

    const currentDate = dato.currentDate;

    const asistPorcentaje = events.filter((ev) => ev.assistance !== undefined).map((ev) => {
        return {
          name: ev.name,
          assistance: ev.assistance,
          capacity: ev.capacity,
          percentage: ((ev.assistance / ev.capacity) * 100).toFixed(2),
        };
      });

    const asistOrder = asistPorcentaje.sort((a, b) => b.percentage - a.percentage).map((ev) => {
        return `${ev.name}: ${ev.percentage}%`;
      });

    const latestEvents = asistOrder.slice(-3);

    const pastCap = events.filter((ev) => ev.date < currentDate);

    const capacityOrder = pastCap.sort((a, b) => b.capacity - a.capacity).map((ev) => {
        return `${ev.name}: ${ev.capacity}`;
      });

    const firstTable = document.getElementById("firstTable");
    firstTable.innerHTML = ` 
    <thead>
        <tr>
            <th colspan="3" id="th-titulo" id="th-titulo">Events statistics</th>
        </tr>
        <tr>
            <th id="columna-1">Events with the highest percentage of attendance</th>
            <th id="columna-2">Events with the lowest percentage of attendance</th>
            <th id="columna-3">Event with larger capacity</th>
        </tr>
    </thead>
    <tbody id="firstTable">
        <tr>
            <td id="columna-1">${asistOrder[0]}</td>
            <td id="columna-2">${latestEvents[2]}</td>
            <td id="columna-3">${capacityOrder[0]}</td>
        </tr>
        <tr>
            <td id="columna-1">${asistOrder[1]}</td>
            <td id="columna-2">${latestEvents[1]}</td>
            <td id="columna-3">${capacityOrder[1]}</td>
        </tr>
        <tr>
            <td id="columna-1">${asistOrder[2]}</td>
            <td id="columna-2">${latestEvents[0]}</td>
            <td id="columna-3">${capacityOrder[2]}</td>
        </tr>
    </tbody>
    `;
    //--------------------------------------------------------------------------------//

    const upCEvents = events
      .filter((ev) => ev.date > currentDate).map((ev) => {
        return {
          name: ev.name,
          category: ev.category,
          capacity: ev.capacity,
          estimate: ev.estimate,
          price: ev.price,
          revenues: ev.price * ev.estimate,
        };
      });

    let ucRaceR = 0;
    let ucRaceC = 0;
    let ucRaceE = 0;
    let ucRaceP = 0;
    for (x of upCEvents) {
      if (x.category.includes("Race")) {
        ucRaceR += x.revenues;
        ucRaceC += x.capacity;
        ucRaceE += x.estimate;
        ucRaceP = ((ucRaceE / ucRaceC) * 100).toFixed(2);
        race = ["Race", ucRaceR, ucRaceP];
      }
    }

    let ucConcertR = 0;
    let ucConcertC = 0;
    let ucConcertE = 0;
    let ucConcertP = 0;
    for (x of upCEvents) {
      if (x.category.includes("Concert")) {
        ucConcertR += x.revenues;
        ucConcertC += x.capacity;
        ucConcertE += x.estimate;
        ucConcertP = ((ucConcertE / ucConcertC) * 100).toFixed(2);
        concert = ["Concert", ucConcertR, ucConcertP];
      }
    }

    let ucFoodR = 0;
    let ucFoodC = 0;
    let ucFoodE = 0;
    let ucFoodP = 0;
    for (x of upCEvents) {
      if (x.category.includes("Food")) {
        ucFoodR += x.revenues;
        ucFoodC += x.capacity;
        ucFoodE += x.estimate;
        ucFoodP = ((ucFoodE / ucFoodC) * 100).toFixed(2);
        food = ["Food", ucFoodR, ucFoodP];
      }
    }

    let ucBooksR = 0;
    let ucBooksC = 0;
    let ucBooksE = 0;
    let ucBooksP = 0;
    for (x of upCEvents) {
      if (x.category.includes("Books")) {
        ucBooksR += x.revenues;
        ucBooksC += x.capacity;
        ucBooksE += x.estimate;
        ucBooksP = ((ucBooksE / ucBooksC) * 100).toFixed(2);
        book = ["Books", ucBooksR, ucBooksP];
      }
    }

    let ucPartyR = 0;
    let ucPartyC = 0;
    let ucPartyE = 0;
    let ucPartyP = 0;
    for (x of upCEvents) {
      if (x.category.includes("Party")) {
        ucPartyR += x.revenues;
        ucPartyC += x.capacity;
        ucPartyE += x.estimate;
        ucPartyP = ((ucPartyE / ucPartyC) * 100).toFixed(2);
        party = ["Party", ucPartyR, ucPartyP];
      }
    }

    let ucMuseumR = 0;
    let ucMuseumC = 0;
    let ucMuseumE = 0;
    let ucMuseumP = 0;
    for (x of upCEvents) {
      if (x.category.includes("Museum")) {
        ucMuseumR += x.revenues;
        ucMuseumC += x.capacity;
        ucMuseumE += x.estimate;
        ucMuseumP = ((ucMuseumE / ucMuseumC) * 100).toFixed(2);
        museum = ["Museum", ucMuseumR, ucMuseumP];
      }
    }

    const secondTable = document.getElementById("secondTable");
    secondTable.innerHTML = `
        <thead>
            <tr>
                <th colspan="3" id="th-titulo" id="th-titulo">Upcoming Events Statistics by Category</th>
            </tr>
            <tr>
                <th id="columna-1" id="columna-1">Categories</th>
                <th id="columna-2">Revenues</th>
                <th id="columna-3">Percentage of attendance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="columna-1">${concert[0]}</td>
                <td id="columna-2">$ ${concert[1]}</td>
                <td id="columna-3">${concert[2]}%</td>
            </tr>
            <tr>
                <td id="columna-1">${race[0]}</td>
                <td id="columna-2">$ ${race[1]}</td>
                <td id="columna-3">${race[2]}%</td>
            </tr>
            <tr>
                <td id="columna-1">${party[0]}</td>
                <td id="columna-2">$ ${party[1]}</td>
                <td id="columna-3">${party[2]}%</td>
            </tr>
            <tr>
                <td id="columna-1">${food[0]}</td>
                <td id="columna-2">$ ${food[1]}</td>
                <td id="columna-3">${food[2]}%</td>
            </tr>
            <tr>
                <td id="columna-1">${book[0]}</td>
                <td id="columna-2">$ ${book[1]}</td>
                <td id="columna-3">${book[2]}%</td>
            </tr>
            <tr>
                <td id="columna-1">${museum[0]}</td>
                <td id="columna-2">$ ${museum[1]}</td>
                <td id="columna-3">${museum[2]}%</td>
            </tr>
        </tbody>
    `;
    //--------------------------------------------------------------------------------//

    const pastEvents = events
      .filter((ev) => ev.date < currentDate)
      .map((ev) => {
        return {
          name: ev.name,
          category: ev.category,
          capacity: ev.capacity,
          assistance: ev.assistance,
          percentage: Math.round((ev.assistance / ev.capacity) * 100),
          price: ev.price,
          revenues: ev.price * ev.assistance,
        };
      });

    let pasRaceR = 0;
    let pasRaceC = 0;
    let pasRaceA = 0;
    let pasRaceP = 0;
    for (x of pastEvents) {
      if (x.category.includes("Race")) {
        pasRaceR += x.revenues;
        pasRaceC += x.capacity;
        pasRaceA += x.assistance;
        pasRaceP = ((pasRaceA / pasRaceC) * 100).toFixed(2);
        pasrace = ["Race", pasRaceR, pasRaceP];
      }
    }

    let pasConcertR = 0;
    let pasConcertC = 0;
    let pasConcertA = 0;
    let pasConcertP = 0;
    for (x of pastEvents) {
      if (x.category.includes("Concert")) {
        pasConcertR += x.revenues;
        pasConcertC += x.capacity;
        pasConcertA += x.assistance;
        pasConcertP = ((pasConcertA / pasConcertC) * 100).toFixed(2);
        pasconcert = ["Concert", pasConcertR, pasConcertP];
      }
    }

    let pasucFoodR = 0;
    let pasucFoodC = 0;
    let pasucFoodA = 0;
    let pasucFoodP = 0;
    for (x of pastEvents) {
      if (x.category.includes("Food")) {
        pasucFoodR += x.revenues;
        pasucFoodC += x.capacity;
        pasucFoodA += x.assistance;
        pasucFoodP = ((pasucFoodA / pasucFoodC) * 100).toFixed(2);
        pasfood = ["Food", pasucFoodR, pasucFoodP];
      }
    }

    let pasBooksR = 0;
    let pasBooksC = 0;
    let pasBooksA = 0;
    let pasBooksP = 0;
    for (x of pastEvents) {
      if (x.category.includes("Books")) {
        pasBooksR += x.revenues;
        pasBooksC += x.capacity;
        pasBooksA += x.assistance;
        pasBooksP = ((pasBooksA / pasBooksC) * 100).toFixed(2);
        pasbook = ["Books", pasBooksR, pasBooksP];
      }
    }

    let pasPartyR = 0;
    let pasPartyC = 0;
    let pasPartyA = 0;
    let pasPartyP = 0;
    for (x of pastEvents) {
      if (x.category.includes("Party")) {
        pasPartyR += x.revenues;
        pasPartyC += x.capacity;
        pasPartyA += x.assistance;
        pasPartyP = ((pasPartyA / pasPartyC) * 100).toFixed(2);
        pasparty = ["Party", pasPartyR, pasPartyP];
      }
    }

    let pasMuseumR = 0;
    let pasMuseumC = 0;
    let pasMuseumA = 0;
    let pasMuseumP = 0;
    for (x of pastEvents) {
      if (x.category.includes("Museum")) {
        pasMuseumR += x.revenues;
        pasMuseumC += x.capacity;
        pasMuseumA += x.assistance;
        pasMuseumP = ((pasMuseumA / pasMuseumC) * 100).toFixed(2);
        pasmuseum = ["Museum", pasMuseumR, pasMuseumP];
      }
    }

    let pasCinemaR = 0;
    let pasCinemaC = 0;
    let pasCinemaA = 0;
    let pasCinemaP = 0;
    for (x of pastEvents) {
      if (x.category.includes("Cinema")) {
        pasCinemaR += x.revenues;
        pasCinemaC += x.capacity;
        pasCinemaA += x.assistance;
        pasCinemaP = ((pasCinemaA / pasCinemaC) * 100).toFixed(2);
        pascinema = ["Cinema", pasCinemaR, pasCinemaP];
      }
    }

    const thirdTable = document.getElementById("thirdTable");
    thirdTable.innerHTML = `
    <thead>
        <tr>
            <th colspan="3" id="th-titulo">Past Eventes Statistics by Sategory</th>
        </tr>
        <tr>
            <th id="columna-1">Categories</th>
            <th id="columna-2">Revenues</th>
            <th id="columna-3">Percentage of attendance</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td id="columna-1">${pasconcert[0]}</td>
            <td id="columna-2">$ ${pasconcert[1]}</td>
            <td id="columna-3">${pasconcert[2]}%</td>
        </tr>
        <tr>
            <td id="columna-1">${pasrace[0]}</td>
            <td id="columna-2">$ ${pasrace[1]}</td>
            <td id="columna-3">${pasrace[2]}%</td>
        </tr>
        <tr>
            <td id="columna-1">${pasfood[0]}</td>
            <td id="columna-2">$ ${pasfood[1]}</td>
            <td id="columna-3">${pasfood[2]}%</td>
        </tr>
        <tr>
            <td id="columna-1">${pasparty[0]}</td>
            <td id="columna-2">$ ${pasparty[1]}</td>
            <td id="columna-3">${pasparty[2]}%</td>
        </tr>
        <tr>
            <td id="columna-1">${pasbook[0]}</td>
            <td id="columna-2">$ ${pasbook[1]}</td>
            <td id="columna-3">${pasbook[2]}%</td>
        </tr>
        <tr>
            <td id="columna-1">${pasmuseum[0]}</td>
            <td id="columna-2">$ ${pasmuseum[1]}</td>
            <td id="columna-3">${pasmuseum[2]}%</td>
        </tr>
        <tr>
            <td id="columna-1">${pascinema[0]}</td>
            <td id="columna-2">$ ${pascinema[1]}</td>
            <td id="columna-3">${pascinema[2]}%</td>
        </tr>
    </tbody>
    `;
  })
  .catch((error) => console.log(error));
