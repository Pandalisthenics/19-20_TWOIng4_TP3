
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    
    
    apiWeather
        .getThreeDayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;
            for (var i=1; i<4; i++){
                //on dispatch les données dans des variables
                const main = data.list[i].weather[0].main;
                const description = data.list[i].weather[0].description;
                const temp = data.list[i].temp.day;
                const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
                //on modifie les emplacements html
                document.getElementById(`forecast-main-${i}`).innerHTML = main;
                document.getElementById(`forecast-more-info-${i}`).innerHTML = description;
                document.getElementById(`icon-weather-container-${i}`).innerHTML = icon;
                document.getElementById(`forecast-temp-${i}`).innerHTML = `${temp}°C`;
            }
        })
}

  