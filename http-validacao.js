const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checaStatus(arrayURL) {
    const arrayStatus = await Promise.all(arrayURL.map(async url => {
        const response = await fetch(url);
        return response.status;
    }));
    return arrayStatus;
}

function geraArrayURL(arrayLinks) {
    return arrayLinks.map(link => link.map(objetoLink => Object.values(objetoLink).join()));
}

async function validaURLs(arrayLinks) {
    const links = geraArrayURL(arrayLinks);
    const statusLinks = await checaStatus(links);
    return arrayLinks[0].map((object, index) => ({
        ...object,
        status: statusLinks[index]
    }));
}

module.exports = validaURLs;