document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'db4d2ae8e2msh2d6c8b9b0389ca6p15be99jsnbff998dffec0';
    const apiHost = 'open-weather13.p.rapidapi.com';
    const apiUrl = 'https://open-weather13.p.rapidapi.com/city/';

    document.getElementById('submit').addEventListener('click', async (e) => {
        e.preventDefault();
        const cityName = encodeURIComponent(document.getElementById('city').value.trim());
        const countryCode = 'EN'; // You can modify this dynamically based on user input if needed

        if (cityName) {
            try {
                const response = await fetch(`${apiUrl}${cityName}/${countryCode}`, {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-host': apiHost,
                        'x-rapidapi-key': apiKey
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    updateWeather(data);
                } else {
                    const errorData = await response.json();
                    alert('City not found! ' + errorData.message);
                }
            } catch (error) {
                alert('Error: ' + error.message);
            }
        }
    });

    const updateWeather = (data) => {
        document.getElementById('cityName').innerText = data.name;
        document.getElementById('cloud_pct').innerText = data.clouds.all + '%';
        document.getElementById('temp').innerText = data.main.temp + '°C';
        document.getElementById('feels_like').innerText = data.main.feels_like + '°C';
        document.getElementById('humidity').innerText = data.main.humidity + '%';
        document.getElementById('min_temp').innerText = data.main.temp_min + '°C';
        document.getElementById('max_temp').innerText = data.main.temp_max + '°C';
        document.getElementById('wind_speed').innerText = data.wind.speed + ' m/s';
        document.getElementById('sunset').innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById('wind_degrees').innerText = data.wind.deg + '°';
        document.getElementById('sunrise').innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    };
});
