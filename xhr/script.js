

const URL_API = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;


window.onload = async () => {

    const pokemon = await fetchData(URL_API);
    console.log(pokemon)

}

function fetchData (url) {
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err))
        // .then(pokedata => console.log(pokedata))
}