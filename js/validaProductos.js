// cambiarnombre con scrpit con api

const marvelTimestamp = '1';
const marvelPublicApiKey = '10dbb46b156201df81553ea3dce5c4e7';
const marvelPrivateApiKey = 'd0ccaf1ecbb87155fa2bf59882ca45cea5b26319'

/*
    Generar marvelHash en https://www.md5hashgenerator.com, escribiendo lo siguiente:

    marvelTimestamp + marvelPrivateApiKey + marvelPublicApiKey

    donde los valores de las 3 variables se escriben todo pegado sin espacios en
    blanco entremedio y sin el signo "+", por ejmplo, si:

    marvelTimestamp="a", 
    marvelPrivateApiKey="b" (esta no se escribe en el código fuente, sólo se pega en el generador de hash)
    marvelPublicApiKey="c"

    se tendría que escribir: "abc", luego presionar el botón "Generate" y copiar
    el "MD5 Hash" generado. Este es el valor que debe ir en la variable "marvelHash"
*/
const marvelHash = '701bd991c4afc88499ca4ce8c3412ec4'; // Reemplaza con el hash generado

// Ejemplo de urlAPI: https://gateway.marvel.com/v1/public/comics?apikey=10dbb46b156201df81553ea3dce5c4e7&ts=1&hash=701bd991c4afc88499ca4ce8c3412ec4
// Para obtener datos desde la API, revisar: https://developer.marvel.com/docs

const urlAPI = `https://gateway.marvel.com/v1/public/comics?`
+ `ts=${marvelTimestamp}&apikey=${marvelPublicApiKey}&hash=${marvelHash}`;

fetch(urlAPI).then(response => response.json()).then(data => {

    const comics = data.data.results;
    const htmlColumnaMarvel = document.getElementById('fila_marvel').innerHTML;
    document.getElementById('fila_marvel').innerHTML = '';

    comics.forEach(function(comic, index) {
    //if (comic.thumbnail.path.indexOf("image_not_available") === -1) {
    description = comic.textObjects.length > 0? comic.textObjects[0].text : '';
    urlFindAmazon = 'https://www.amazon.com/s?k='
        + comic.title?? `title: ${comic.title}`
        + comic.series.name?? `series: ${comic.series.name}`
        + description?? `description: ${description}`;
    console.log(urlFindAmazon);
    html = htmlColumnaMarvel
        .replace('#imagen#', comic.thumbnail.path + '.' + comic.thumbnail.extension)
        .replace('#titulo#', comic.title)
        .replace('#serie#', comic.series.name)
        .replace('#descripcion#', description)
        .replace('#urlboton#', urlFindAmazon);

        if (document.getElementById('fila_marvel').innerHTML.indexOf(html) === -1) {
        document.getElementById('fila_marvel').innerHTML += html;
        }
    //}
});

document.getElementById('fila_marvel').style.display = '';
});
