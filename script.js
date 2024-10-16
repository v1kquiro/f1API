function myFunction() {
  window.location.href = 'index.html';
}

// JavaScript code for fetching and displaying drivers
const driverContainer = document.getElementById('driverContainer');

// API URL to fetch drivers from the 2023 season
const apiUrl = 'https://api.openf1.org/v1/drivers';

// Function to fetch drivers
function fetchDrivers() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(drivers => {
      displayDrivers(drivers);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      driverContainer.innerHTML = '<p>Failed to load driver data.</p>';
    });
}

const obj = JSON.parse([
  {
      "Driver Name": "Max Verstappen",
      "Team": "Red Bull Racing",
      "Country": "Netherlands",
      "Podiums": "109",
      "Points": "2917.5",
      "Grands Prix entered": "203",
      "World Championships": "3",
      "Highest race finish": "1 (x61)",
      "Highest grid position": "1",
      "Date of birth": "30/09/1997",
      "Place of birth": "Hasselt, Belgium"
  },
  {
      "Driver Name": "Alexander Albon",
      "Team": "Williams",
      "Country": "Thailand",
      "Podiums": "2",
      "Points": "240",
      "Grands Prix entered": "99",
      "World Championships": "0",
      "Highest race finish": "3 (x2)",
      "Highest grid position": "4",
      "Date of birth": "23/03/1996",
      "Place of birth": "London, England"
  },
  {
      "Driver Name": "Lewis Hamilton",
      "Team": "Mercedes",
      "Country": "United Kingdom",
      "Podiums": "201",
      "Points": "4813.5",
      "Grands Prix entered": "350",
      "World Championships": "7",
      "Highest race finish": "1 (x105)",
      "Highest grid position": "1",
      "Date of birth": "07/01/1985",
      "Place of birth": "Stevenage, England"
  },
  {
      "Driver Name": "Lando Norris",
      "Team": "McLaren",
      "Country": "United Kingdom",
      "Podiums": "24",
      "Points": "912",
      "Grands Prix entered": "122",
      "World Championships": "0",
      "Highest race finish": "1 (x3)",
      "Highest grid position": "1",
      "Date of birth": "13/11/1999",
      "Place of birth": "Bristol, England"
  },
  {
      "Driver Name": "Charles Leclerc",
      "Team": "Ferrari",
      "Country": "Monaco",
      "Podiums": "39",
      "Points": "1319",
      "Grands Prix entered": "143",
      "World Championships": "0",
      "Highest race finish": "1 (x7)",
      "Highest grid position": "1",
      "Date of birth": "16/10/1997",
      "Place of birth": "Monte Carlo, Monaco"
  },
  {
      "Driver Name": "Sergio Perez",
      "Team": "Red Bull Racing",
      "Country": "Mexico",
      "Podiums": "39",
      "Points": "1630",
      "Grands Prix entered": "276",
      "World Championships": "0",
      "Highest race finish": "1 (x6)",
      "Highest grid position": "1",
      "Date of birth": "26/01/1990",
      "Place of birth": "Guadalajara, Mexico"
  },
  {
      "Driver Name": "Daniel Ricciardo",
      "Team": "RB",
      "Country": "Australia",
      "Podiums": "32",
      "Points": "1329",
      "Grands Prix entered": "257",
      "World Championships": "0",
      "Highest race finish": "1 (x8)",
      "Highest grid position": "1",
      "Date of birth": "01/07/1989",
      "Place of birth": "Perth, Australia"
  },
  {
      "Driver Name": "Kevin Magnussen",
      "Team": "Haas",
      "Country": "Denmark",
      "Podiums": "1",
      "Points": "192",
      "Grands Prix entered": "181",
      "World Championships": "0",
      "Highest race finish": "2 (x1)",
      "Highest grid position": "4",
      "Date of birth": "05/10/1992",
      "Place of birth": "Roskilde, Denmark"
  },
  {
      "Driver Name": "Carlos Sainz",
      "Team": "Ferrari",
      "Country": "Spain",
      "Podiums": "23",
      "Points": "1172.5",
      "Grands Prix entered": "202",
      "World Championships": "0",
      "Highest race finish": "1 (x3)",
      "Highest grid position": "1",
      "Date of birth": "01/09/1994",
      "Place of birth": "Madrid, Spain"
  },
  {
      "Driver Name": "Esteban Ocon",
      "Team": "Alpine",
      "Country": "France",
      "Podiums": "3",
      "Points": "427",
      "Grands Prix entered": "151",
      "World Championships": "0",
      "Highest race finish": "1 (x1)",
      "Highest grid position": "3",
      "Date of birth": "17/09/1996",
      "Place of birth": "\u00c9vreux, Normandy"
  },
  {
      "Driver Name": "Pierre Gasly",
      "Team": "Alpine",
      "Country": "France",
      "Podiums": "4",
      "Points": "402",
      "Grands Prix entered": "148",
      "World Championships": "0",
      "Highest race finish": "1 (x1)",
      "Highest grid position": "2",
      "Date of birth": "07/02/1996",
      "Place of birth": "Rouen, France"
  }
]
);

// Function to display drivers in the HTML
function displayDrivers(drivers) {
  driverContainer.innerHTML = ''; // Clear loading message
  drivers.forEach(driver => {
    // Create a div for each driver card
    const driverCard = document.createElement('div');
    driverCard.classList.add('driver-card');
    console.log(driver)
    // Populate the card with driver details
    driverCard.innerHTML = `
      <h2>${driver.broadcast_name}</h2>
      <p><strong>Constructor:</strong> ${driver.team_name}</p>
      <p><strong>Nationality:</strong> ${driver.country_code}</p>
      <p><strong>Driver Number:</strong> ${driver.driver_number}</p>
    `;

    // Append the card to the driver container
    driverContainer.appendChild(driverCard);
  });
}

// Call the fetchDrivers function when the page loads
fetchDrivers(); 