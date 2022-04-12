
const userLocation = document.querySelector('#location')
const pTemperature = document.querySelector('#temp')
const pDescription = document.querySelector('#description')
const image = document.querySelector('#image')
const img = document.createElement('img')
const loader = document.querySelector('#loader')
// const pLocation = document.createElement('p')
// const pCountry = document.createElement('p')

loader.textContent = '... weather information loading'
const getLocation = () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords

            fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`).then(res => {
                res.json().then(x => {

                    loader.textContent = ''
                    const { name: location } = x
                    const [weather] = x.weather
                    const { temp } = x.main
                    const { country } = x.sys
                    // getCountry = country
                    // locationCountry = location
                    // getTemp = temp
                    // weatherIcon = weather.icon
                    // weatherDescription = weather.main
                    pTemperature.textContent = `${temp} C`
                    userLocation.textContent = `${location}, ${country}`
                    pDescription.textContent = weather.main
                    img.src = weather.icon
                    image.append(img)
                    // userLocation.append(pLocation, pCountry)
                })
            })
        })
    } else {
        console.log('Geolocation is not supported by this browser')
    }
}


getLocation()


// console.log('cc', locationCountry)

// console.log(locationCountry)

