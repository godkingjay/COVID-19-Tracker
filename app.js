const endpoint = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json';
let covidLatest = {};

let uData = {
  abbr: '',
  country: ''
};

const getJSON = async url => {
  const response = await fetch(url);
  if(!response.ok) // check if response worked (no 404 errors etc...)
    throw new Error(response.statusText);

  const data = response.json(); // get JSON from the response
  return data; // returns a promise, which resolves to this data value
}

console.log('Fetching data...');

getJSON(endpoint).then(data => {
  covidLatest = data;
  }).catch(error => {
  console.error(error);
});