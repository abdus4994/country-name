const loadCountries = () =>{
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data) )
}

const displayCountries = (countries) =>{
    const countriesContainer = document.getElementById('countriesContainer')
    
    countries.forEach(country => { 
        const countryDiv = document.createElement('div')
        countryDiv.classList.add("displayCountries")
        countryDiv.innerHTML = `<h3>Name: ${country.name.common}</h3>
        <p>Capital : ${country.capital}</p>
        <button onClick="loadDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv) 

    });
}

function loadDetails(code){
fetch(`https://restcountries.com/v3.1/alpha/${code}`)
.then(res => res.json())
.then(data => countryDetails(data[0]))
}

function countryDetails (country) { 
    var myWindow = window.open("", "", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=400,width=600,height=400");

        const detailsContainer = document.createElement('div')
        detailsContainer.classList.add("center");
        const result = detailsContainer.innerHTML = ` 
        <h2 class="center"> Details: ${country.name.common} </h2>
        <h2> Official: ${country.name.official} </h2>
        <img src="${country.flags.png}" alt="" srcset="">`;
        myWindow.document.write(result);
       
      
      

};


loadCountries()


// if (confirm("you want to see country details please press ok!")) {
//     const result = detailsContainer.innerHTML = ` 
//     <h2> Details: ${country.name.common} </h2>
//     <h2> official: ${country.name.official} </h2>
//     <img src="${country.flags.png}" alt="" srcset="">`;
//     return result; ;
//   } else {
//     detailsContainer.innerText = "You pressed Cancel!" ;
//   } 