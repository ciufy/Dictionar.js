// public/Dictionar.js - Fișier complet pentru Netlify
const weatherData = {
  translations: {
    'sunny': 'Însorit',
    'clear': 'Senin',
    'partly cloudy': 'Parțial noros',
    'cloudy': 'Noros',
    'overcast': 'Înnorat',
    'mist': 'Ceață',
    'fog': 'Ceață densă',
    'freezing fog': 'Ceață înghețată',
    'patchy rain possible': 'Ploaie posibilă',
    'light rain': 'Ploaie ușoară',
    'moderate rain': 'Ploaie moderată',
    'heavy rain': 'Ploaie torențială',
    'light rain shower': 'Averse de ploaie ușoară',
    'moderate or heavy rain shower': 'Averse de ploaie moderate/torențiale',
    'torrential rain shower': 'Averse torențiale',
    'light freezing rain': 'Ploaie înghețată ușoară',
    'moderate or heavy freezing rain': 'Ploaie înghețată moderată/torențială',
    'patchy snow possible': 'Zăpadă posibilă',
    'light snow': 'Zăpadă ușoară',
    'moderate snow': 'Zăpadă moderată',
    'heavy snow': 'Zăpadă abundentă',
    'patchy sleet possible': 'Lapoviță posibilă',
    'light sleet': 'Lapoviță ușoară',
    'moderate or heavy sleet': 'Lapoviță moderată/torențială',
    'patchy freezing drizzle possible': 'Burniță înghețată posibilă',
    'light freezing drizzle': 'Burniță înghețată ușoară',
    'thundery outbreaks possible': 'Posibil furtuni',
    'thunderstorm': 'Furtună',
    'thunderstorm with light rain': 'Furtună cu ploaie ușoară',
    'thunderstorm with rain': 'Furtună cu ploaie',
    'thunderstorm with heavy rain': 'Furtună cu ploaie torențială',
    'thunderstorm with light drizzle': 'Furtună cu burniță ușoară',
    'thunderstorm with drizzle': 'Furtună cu burniță',
    'thunderstorm with heavy drizzle': 'Furtună cu burniță torențială',
    'blizzard': 'Viscol',
    'blowing snow': 'Zăpadă viscolită',
    'ice pellets': 'Grindină',
    'hot': 'Canicular',
    'cold': 'Ger',
    'windy': 'Vânt puternic',
    'hail': 'Grindină',
    'default': 'Parțial noros'
  },
  emojis: {
    'sunny': '☀️',
    'clear': '🌙',
    'partly cloudy': '⛅',
    'cloudy': '☁️',
    'overcast': '☁️',
    'mist': '🌫️',
    'fog': '🌁',
    'freezing fog': '❄️🌁',
    'patchy rain possible': '🌦️',
    'light rain': '🌧️',
    'moderate rain': '🌧️',
    'heavy rain': '⛈️',
    'light rain shower': '🌧️',
    'moderate or heavy rain shower': '🌧️',
    'torrential rain shower': '⛈️',
    'light freezing rain': '🌧️❄️',
    'moderate or heavy freezing rain': '🌧️❄️',
    'patchy snow possible': '🌨️',
    'light snow': '❄️',
    'moderate snow': '❄️',
    'heavy snow': '❄️❄️',
    'blizzard': '🌬️❄️',
    'blowing snow': '🌬️❄️',
    'patchy sleet possible': '🌨️',
    'light sleet': '🌨️',
    'moderate or heavy sleet': '🌨️',
    'patchy freezing drizzle possible': '🌧️❄️',
    'light freezing drizzle': '🌧️❄️',
    'thundery outbreaks possible': '🌩️',
    'thunderstorm': '⛈️',
    'thunderstorm with light rain': '⛈️',
    'thunderstorm with rain': '⛈️',
    'thunderstorm with heavy rain': '⛈️',
    'thunderstorm with light drizzle': '⛈️',
    'thunderstorm with drizzle': '⛈️',
    'thunderstorm with heavy drizzle': '⛈️',
    'ice pellets': '🧊',
    'hot': '🔥',
    'cold': '❄️',
    'windy': '🌬️',
    'hail': '🧊',
    'default': '⛅'
  }
};

const windDirectionTranslations = {
  'N': 'Nord',
  'NNE': 'Nord-Nord-Est',
  'NE': 'Nord-Est',
  'ENE': 'Est-Nord-Est',
  'E': 'Est',
  'ESE': 'Est-Sud-Est',
  'SE': 'Sud-Est',
  'SSE': 'Sud-Sud-Est',
  'S': 'Sud',
  'SSW': 'Sud-Sud-Vest',
  'SW': 'Sud-Vest',
  'WSW': 'Vest-Sud-Vest',
  'W': 'Vest',
  'WNW': 'Vest-Nord-Vest',
  'NW': 'Nord-Vest',
  'NNW': 'Nord-Nord-Vest'
};

const dayTranslations = {
  'Mon': 'Luni',
  'Tue': 'Marți',
  'Wed': 'Miercuri',
  'Thu': 'Joi',
  'Fri': 'Vineri',
  'Sat': 'Sâmbătă',
  'Sun': 'Duminică'
};

// Export pentru browser (global)
if (typeof window !== 'undefined') {
  window.WeatherDictionary = {
    weatherData,
    windDirectionTranslations,
    dayTranslations
  };
}

// Export pentru module ES6
if (typeof exports !== 'undefined') {
  exports.weatherData = weatherData;
  exports.windDirectionTranslations = windDirectionTranslations;
  exports.dayTranslations = dayTranslations;
}
