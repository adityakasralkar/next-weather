// const apiKey = process.env.API_KEY;
const baseUrl = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.API_KEY}`;

const getByLocation = async (location) => {
  try {
    const response = await fetch(baseUrl(location));
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default { getByLocation };

