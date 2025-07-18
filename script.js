async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY_HERE'; // replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    const result = document.getElementById('result');

    if (data.cod === 200) {
        result.innerHTML = `
            <div class="weather-card">
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
            </div>
        `;
    } else {
        result.innerHTML = `<p>City not found. Please try again.</p>`;
    }

}

const images = [
        'images/bg1.avif',
        'images/bg2.webp',
        'images/bg3.avif',
        'images/bg4.jpg',
        'images/bg5.jpg'
    ];

    let currentIndex = 0;
    const heroSection = document.querySelector('.hero');

    function changeBackground() {
        heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1)% images.length;
    }

changeBackground();
setInterval(changeBackground, 4000);