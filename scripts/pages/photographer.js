//Code JavaScript lié à la page photographer.html
// Récupération de l'ID dans l'URL
async function getUrlID() {
    let params = (new URL(document.location)).searchParams;
    // console.log(params);
    let id = parseInt(params.get('id'));
    // console.log(id);
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
async function CreateId(data) {

    const photographerID = photographerFactory(data); // Récupération de l'objet via la Factory Photographer
    const photographerHeader = document.querySelector('.photograph-header');

    photographerHeader.prepend(photographerID.getUserNameDOM()); 
    photographerHeader.appendChild(photographerID.getUserPictureDOM());
    
}

// Fonction récupérant les objets des medias du photographe
async function CreatePicture(data) {    
    
    const photographerPicture = document.getElementById('user-pictures'); 
    
    data.media.forEach((media) => {
        // Création d'un lien unique pour chaque média
        let urlName = `./assets/${data.name}/` + (media.image ? media.image : media.video);
        // Ajouter le lien dans l'objet media
        let medias = { ...media, urlName}
        const pictureDOM = mediaFactory(medias); // utilisation de la Factory Media
        const pictureArticle = pictureDOM.getUserMediasDOM();
        photographerPicture.appendChild(pictureArticle);
    })
}

// Fonction permettant de récupérer tous les likes de chaque photo
async function CreateAllLikes(data){
    const photographerPicture = document.getElementById('user-pictures');
    const datalikesAndPrices = mediaFactory(data);
    // console.log(datalikesAndPrices)
    const likesAndPrices = datalikesAndPrices.getLikesNumbers();
    // console.log(likesAndPrices)
    photographerPicture.appendChild(likesAndPrices);  
}

// Fonction recupérant chaque objet de la lightbox 
async function CreateLightboxContent(data){
    
    const leftArrow = document.querySelector('.lightbox-pictures');
    
    data.media.forEach((media) => { // pour chaque média
        // création d'un lien unique a intégré dans l'objet media
        let urlName = `./assets/${data.name}/`+ (media.image ? media.image : media.video);
        let medias = { ...media, urlName}
        const imageData = mediaFactory(medias);

        // récupération de l'objet via la fonction de la factory getLightbox()
        const articleImage = imageData.getLightbox(); 
        // console.log(articleImage);
        leftArrow.appendChild(articleImage);
    })

}

// Fonction qui initalise toutes les fonctions pour générer le contenu de la page du photographe
async function init() {
    const id = await getUrlID()
    // Récupère les datas du photographe
    const thePhotographer = await getPhotographer(id);
    await CreateId(thePhotographer);    
    await CreatePicture(thePhotographer);
    await CreateAllLikes(thePhotographer);    
    await CreateLightboxContent(thePhotographer);
};

// Lancement de la fonction init()
init();


