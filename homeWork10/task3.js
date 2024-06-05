async function getRequiredInformation () { 

const resultArray = []

//Getting the data from film with id=3 and converting the data to 'json' format
const url = await fetch ('https://swapi.dev/api/films/3');
const filmData = await url.json();

//Getting all the planets from the film (id=3) by going through the response using 'for' cycle
for (const planet of filmData.planets) {
	const planetResponse = await fetch (planet);
	const planetData = await planetResponse.json();

	//Getting all the residents from the planets with 'for' cycle
	const residentsArray = [];
	for (const resident of planetData.residents) {
        const residentResponse = await fetch (resident);
        const residentData = await residentResponse.json();
        residentsArray.push(residentData.name);
    }
	
	resultArray.push (
		{planetName: planetData.name,
		residents: residentsArray},
	);
}
return resultArray
}
getRequiredInformation().then((resultArray) => console.log(resultArray))


