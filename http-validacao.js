const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checaStatus(arrayURL) {
    console.log(arrayURL);
    const arrayStatus = await Promise.all(arrayURL.map(async url => {
        const response = await fetch(url);
        return response.status;
    }));
    return arrayStatus;
}

function geraArrayURL(arrayLinks) {
    return arrayLinks.map(link => link.map(objetoLink => Object.values(objetoLink).join()))[0];
}

async function validaURLs(arrayLinks) {
    const links = geraArrayURL(arrayLinks);
    return await checaStatus(links);
}

module.exports = validaURLs;