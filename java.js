// let button2 = document.getElementById('button1');
// button2 = addEventListener('click', (e) => {
// 	e.preventDefault()
// 	let countryname =document.getElementById('namecountry').value;
let button1 = document.querySelector('#button1');
button1.addEventListener('click', () => {
	let countryname = document.getElementById('namecountry').value;
	console.log(countryname);
	let cityname = document.getElementById('namecity').value;
	console.log(cityname);
	fetchWeather(countryname, cityname);
})













async function fetchWeather(countryname, cityname) {
	const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + countryname + ',' + cityname;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '32bd60e2f0msha71d39d6fde6990p1e75ebjsn3797a06da868',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		
		let display1 = document.getElementById("display1");
		display1.innerHTML = `
		<h1 class="text-center">Location</h1>
	<table class="table">
	<thead>
	  <tr>
		<th scope="col">Country</th>
		<th scope="col">Name</th>
		<th scope="col">Region</th>
		<th scope="col">Tz_id</th>
		<th scope="col">Lat</th>
		<th scope="col">Localtime</th>
		<th scope="col">Localtime_epoch</th>
		<th scope="col">Lon</th>
	  </tr>
	</thead>
	<tbody>
	<tr>
	  <td>${result.location.country}</td>
	  <td>${result.location.name}</td>
	  <td>${result.location.region}</td>
	  <td>${result.location.tz_id}</td>
	  <td>${result.location.lat}</td>
	  <td>${result.location.localtime}</td>
	  <td>${result.location.localtime_epoch}</td>
	  <td>${result.location.lon}</td>
	</tr>
  </tbody>
  <table>`;


		let display2 = document.getElementById("display2");
		display2.innerHTML = `
		<div class="d-flex m-auto">
  <div class="flex-shrink-0">
    <img src="${result.current.condition.icon}" alt="image">
  </div>
  <div class="flex-grow-1 ms-3 mt-2">
   Weather of ${result.location.country} and ${result.location.name} 
  </div>
</div>
	<table class="table">
	<thead>
	  <tr>
		<th scope="col">Cloud</th>
		<th scope="col">Feelslike_c</th>
		<th scope="col">Feelslike_f</th>
		<th scope="col">Gust_kph</th>
		<th scope="col">Gust_mph</th>
		
	  </tr>
	</thead>
	<tbody>
	<tr>
	  <td>${result.current.cloud}</td>
	  <td>${result.current.feelslike_c}</td>
	  <td>${result.current.feelslike_f}</td>
	  <td>${result.current.gust_kph}</td>
	  <td>${result.current.gust_mph}</td>
	</tr>
  </tbody>
	<thead>
	  <tr>
		
		<th scope="col">Humidity</th>
		<th scope="col">Precip_in</th>
		<th scope="col">Precip_mm</th>
		<th scope="col">Pressure_in</th>
		<th scope="col">Pressure_mb</th>
		
	  </tr>
	</thead>
	<tbody>
	<tr>
	 
	  <td>${result.current.humidity}</td>
	  <td>${result.current.precip_in}</td>
	  <td>${result.current.precip_mm}</td>
	  <td>${result.current.pressure_in}</td>
	  <td>${result.current.pressure_mb}</td>
	 
	  
	</tr>
  </tbody>
	<thead>
	  <tr>
		
		<th scope="col">Temp_c</th>
		<th scope="col">Temp_f</th>
		<th scope="col">Uv</th>
		<th scope="col">Vis_km</th>
		<th scope="col">Vis_miles</th>
		
	  </tr>
	</thead>
	<tbody>
	<tr>
	
	  <td>${result.current.temp_c}</td>
	  <td>${result.current.temp_f}</td>
	  <td>${result.current.uv}</td>
	  <td>${result.current.vis_km}</td>
	  <td>${result.current.vis_miles}</td>
	  
	</tr>
  </tbody>
	<thead>
	  <tr>
		
		<th scope="col">Wind_degree</th>
		<th scope="col">Wind_dir</th>
		<th scope="col">Wind_kph</th>
		<th scope="col">Wind_mph</th>
	  </tr>
	</thead>
	<tbody>
	<tr>
	  <td>${result.current.wind_degree}</td>
	  <td>${result.current.wind_dir}</td>
	  <td>${result.current.wind_kph}</td>
	  <td>${result.current.wind_mph}</td>
	  
	</tr>
  </tbody>
  
  <table>`;

	} catch (error) {
		console.error(error);
	}
}



