// International Space Station
let url = "http://api.open-notify.org/iss-now.json";
function waitForData(response) {
  return response.json();
}

function handleData(data) {
  console.log(data);
  let latitude = data.iss_position.latitude;
  console.log(latitude);
  let longitude = data.iss_position.longitude;
  console.log(longitude);
  let resultDiv = document.querySelector("#results");
  console.log(resultDiv);
  let markUp = `
  <P>The latitude is ${latitude}</p>
  <p>The longitude is ${longitude}</p>
  `;
  resultDiv.innerHTML = markUp;
}

// Bonus One: Updating the current latitude and longitude
function fetchData() {
  fetch(url).then(waitForData).then(handleData);
}
setInterval(fetchData, 1000);
