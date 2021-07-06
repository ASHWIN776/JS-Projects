// API endpoint
const endpoint =  "http://api.tvmaze.com/search/shows?q=";

const searchForm = document.querySelector("#tvSearchForm");

searchForm.addEventListener("submit", showResults);

async function showResults(evt)
{
    evt.preventDefault();
    const query = searchForm.elements.showName.value;

    try{
        // AJAX
        const res = await fetch(endpoint + query);
        const data = await res.json();
        console.log(data);

        // HTML for query Results
        const results = data
        .filter(({show:{image, url}}) => image && url)  
        .map(({show:{image:{medium}, url}}) => `
        <div class="img-container">
            <a href="${url}"><img src="${medium}"></a>
        </div> 
        `)
        .join("");
        console.log(results);   

        document.querySelector("#query-results").innerHTML = results;
    }
    catch(e)
    {
        console.log("Something went wrong! - ", e);
    }
}   