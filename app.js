
function getWeatherInfo(pos) {
  var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
               'lat=' + pos.coords.latitude +
               '&lon=' + pos.coords.longitude;
  $.getJSON(apiUrl, function(data) {
    var msg = '';
    $('#currentWeather').text(data.weather[0].main + ': ' + data.weather[0].description);
    $('#city').text(data.name);
  });
}

function init() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(getWeatherInfo, function(err) {
      $('#error').html(err.message);
    });
  } else {
    alert('This app needs geolocation to work!');
  }
}

window.onLoad = init();