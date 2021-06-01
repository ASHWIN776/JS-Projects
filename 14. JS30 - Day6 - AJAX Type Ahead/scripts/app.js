const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector("input");
const suggestions = document.querySelector(".suggestions");

let data;

const getData = async function() {
    try{
        const res = await fetch(endpoint);
        data = await res.json();
        console.log("Got the data", data);
    }
    catch(err){
        console.log("OOP!!! Failed - ", err);
    }
}

// To get the data from the API
getData();

function getMatchedData(wordToMatch, data)
{
    const regex = new RegExp(wordToMatch, "gi");

    return data.filter(place => 
        (place.city.match(regex) || place.state.match(regex))
    )
}

const displayMatchedData = function(){        
    const wordToMatch = this.value;
    if(!wordToMatch) return;

    let matchedData = getMatchedData(wordToMatch, data);

    const html = matchedData.map(({city, state, population}) => {
        return `
            <li>${city}, ${state} - ${population}</li>
        `
    }).join("");

    suggestions.innerHTML = html;
    // Matched Data will be shown in the console
    // console.log(matchedData)

}

input.addEventListener("input", displayMatchedData)