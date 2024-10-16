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