const endpoint = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json';
let covidLatest = {};

let uData = {
  abbr: 'AFG',
  country: ''
};

const getJSON = async url => {
  const response = await fetch(url);
  if(!response.ok)
    throw new Error(response.statusText);

  const data = response.json();
  return data;
}

console.log('Fetching data...');

getJSON(endpoint).then(data => {
  covidLatest = data;
  }).catch(error => {
  console.error(error);
});

const inputAbbr = document.querySelector('#inputAbbr');

inputAbbr.addEventListener('input', (e) => {
  console.log(e.target);
  uData.abbr = e.target.value;
  document.querySelector('.text').textContent = JSON.stringify(covidLatest[uData.abbr]);
});