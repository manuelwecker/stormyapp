export async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=7&lon=51&appid=b12e52770a4ea6451e533761faa2e8ff`
  );
  const data = await response.json();
  console.log(data);
  return data;
}
