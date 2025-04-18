fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=eebafbbdb2f368232022d2f2b54999ef&units=metric")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.main.temp);
        temperature.textContent = "Temperature: "+data.main.temp+"\u00b0C";
        description.textContent = data.weather[0].description;
        humidity.textContent = "Humidty: "+data.main.humidity;
    
        hightemp.textContent = "Today's High: "+data.main.temp_max+"\u00B0C";
        lowtemp.textContent = "Today's Low: "+data.main.temp_min+"\u00B0C";
        feelslike.textContent = "Feels Like Temperature: "+data.main.feels_like+"\u00B0C";
    
        console.log("https://openweathermap.org/img/wn/"+data.weather[0].icon+".png");
    
        icon.src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        icon.alt = data.weather[0].description;
    
    
    
    })

    let slideIndex = 1;
    showSlides (slideIndex);

    function plusSlides (n) {
        showSlides (slideIndex += n);
    }

    function showSlides (n) {
        let i;
        let slides = document.getElementsByClassName ("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000)
}
    