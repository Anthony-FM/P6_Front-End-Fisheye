//Code JavaScript lié à la page photographer.html

async function getUrlID() {

        let params = (new URL(document.location)).searchParams;
        console.log(params);
        let id = parseInt(params.get('id'));
        console.log(id);

        return id;
    }

async function getPhotographer(id) {
    // Récupérations des données dans le json
    const photographersJSON = await fetch ("./data/photographers.json");
    const photographersData = await photographersJSON.json();
    const photographers = photographersData.photographers;
    const medias = photographersData.media;
    
    // On retourne le tableau photographers seulement une fois
    
    const photographer = photographers.filter( photographer => photographer.id === id)[0];
    const thePhotographer = {
        ...photographer,
        media: medias.filter( media => media.photographerId === id),
    };

    return (thePhotographer);
}


async function CreateId(data) {

    const photographerID = photographerFactory(data);
    const photographerHeader = document.querySelector('.photograph-header');

    photographerHeader.prepend(photographerID.getUserNameDOM())
    photographerHeader.appendChild(photographerID.getUserPictureDOM());
    
}

async function init() {
    const id = await getUrlID()
    // Récupère les datas du photographe
    const thePhotographer = await getPhotographer(id);
    CreateId(thePhotographer);
};

init();
