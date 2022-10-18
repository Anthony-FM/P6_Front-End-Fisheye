async function getPhotographers() {
    // Récupérations des données dans le json
    const photographerJSON = await fetch ("./data/photographers.json");
    const photographers = await photographerJSON.json();
    // console.log(photographers);
    // On retourne le tableau photographers seulement une fois
    return photographers;
}

async function displayData(photographers) { 
    // Fonction displayData qu récupère la fonction "photographeFactory()"
    // pour l'ajouter dans la div .photographer_section
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => { // pour chaque 'photographe'
        const photographerModel = photographerFactory(photographer);
        // console.log(photographerModel);
        const userCardDOM = photographerModel.getUserCardDOM();
        // console.log(userCardDOM);
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const {photographers} = await getPhotographers();
    displayData(photographers);
};

init();
