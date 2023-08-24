//Code JavaScript lié à la page photographer.html
// Récupération de l'ID dans l'URL
async function getUrlID() {
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));
    return id;
}

// Récupération des données dans le fichier JSON
async function getPhotographer(id) {
    // Récupérations des données dans le json
    const photographersJSON = await fetch ("./data/photographers.json");
    const photographersData = await photographersJSON.json();

    // Différenciation des données photographers et media
    const photographers = photographersData.photographers;
    const medias = photographersData.media;
    
    // Filtration des données d'un photographe grace à son id. Récupérés via filter()
    const photographer = photographers.filter( photographer => photographer.id === id)[0];
    const thePhotographer = {
        ...photographer,
        media: medias.filter( media => media.photographerId === id),
    };
    
    // On retourne l'objet des données d'un seul photographe avec SES medias
    return (thePhotographer);
}

// Fonction récupérant l'objet identifiant le photographe : Nom, prenom, photo de profil, citation, prix etc...
async function createId(data) {

    const photographerID = photographerFactory(data); // Récupération de l'objet via la Factory Photographer
    const photographerHeader = document.querySelector('.photograph-header');

    photographerHeader.prepend(photographerID.getUserNameDOM()); 
    photographerHeader.appendChild(photographerID.getUserPictureDOM());
    
}

// Fonction récupérant les objets des medias du photographe
async function displayMedias(data) {    
    const photographerPicture = document.getElementById('user-pictures'); 
    let dataImgs = data.media.filter((el) =>  el.image)
    let dataVideos = data.media.filter((el) =>  el.video)

    const imagesFromData = dataImgs.map((dataImg) => new MediaFactory(dataImg, data.name, 'image'))
    const videoFromData = dataVideos.map((dataVideo) => new MediaFactory(dataVideo, data.name, 'video'))
    
    const fullMedias = imagesFromData.concat(videoFromData)
    fullMedias.forEach((media) => {
        // // Création d'un lien unique pour chaque média
        // let urlName = `./assets/${data.name}/` + (media.image ? media.image : media.video);
        // // Ajouter le lien dans l'objet media
        // let medias = { ...media, urlName}
        const pictureDOM = mediaFactory(media); // utilisation de la Factory Media
        const pictureArticle = pictureDOM.getUserMediasDOM();
        photographerPicture.appendChild(pictureArticle);
    })
}

// Fonction permettant de récupérer tous les likes de chaque photo
async function createAllLikes(data){
    const photographerPicture = document.getElementById('user-pictures');
    const datalikesAndPrices = mediaFactory(data);
    const likesAndPrices = datalikesAndPrices.getLikesNumbers();
    photographerPicture.appendChild(likesAndPrices);  
}

// Fonction recupérant chaque objet de la lightbox 
async function createLightboxContent(data){
    
    const asideContainer = document.querySelector('.lightbox-pictures-aside');
    
    data.media.forEach((media) => { // pour chaque média
        // création d'un lien unique a intégré dans l'objet media
        let urlName = `./assets/${data.name}/`+ (media.image ? media.image : media.video);
        let medias = { ...media, urlName}
        const imageData = mediaFactory(medias);

        // récupération de l'objet via la fonction de la factory getLightboxMedias()
        const articleImage = imageData.getLightboxMedias(); 
        asideContainer.appendChild(articleImage);
    })

}

// Fonction qui initalise toutes les fonctions pour générer le contenu de la page du photographe
async function init() {
    const id = await getUrlID()
    // Récupère les datas du photographe
    const thePhotographer = await getPhotographer(id);
    await createId(thePhotographer);    
    await displayMedias(thePhotographer);
    await createAllLikes(thePhotographer);    
    await createLightboxContent(thePhotographer);
    opencLightboxWithButton();
    await upOrDownLike(thePhotographer);
    
};

// Lancement de la fonction init()
init();


