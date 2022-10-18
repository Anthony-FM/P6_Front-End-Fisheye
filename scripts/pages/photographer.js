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

async function CreatePicture(data) {    
    
    const photographerPicture = document.getElementById('user-pictures'); 
    
    data.media.forEach((media) => {
        let urlName = `./assets/${data.name}/` + (media.image ? media.image : media.video);
        let medias = { ...media, urlName}
        const pictureDOM = mediaFactory(medias);
        const pictureArticle = pictureDOM.getUserMediasDOM();
        photographerPicture.appendChild(pictureArticle);
    })
}



async function CreateAllLikes(data){
    const photographerPicture = document.getElementById('user-pictures');
    const datalikesAndPrices = mediaFactory(data);
    console.log(datalikesAndPrices)
    const likesAndPrices = datalikesAndPrices.getLikesNumbers();
    console.log(likesAndPrices)
    photographerPicture.appendChild(likesAndPrices);  
}

async function CreateLightboxContent(data){
    
    const leftArrow = document.querySelector('.lightbox-pictures');
    
    data.media.forEach((media) => {
        let urlName = `./assets/${data.name}/`+ (media.image ? media.image : media.video);
        let medias = { ...media, urlName}
        const imageData = mediaFactory(medias);
        const articleImage = imageData.getLightbox();
        console.log(articleImage);
        leftArrow.appendChild(articleImage);
    })

}

async function init() {
    const id = await getUrlID()
    // Récupère les datas du photographe
    const thePhotographer = await getPhotographer(id);
    await CreateId(thePhotographer);    
    await CreatePicture(thePhotographer);
    await CreateAllLikes(thePhotographer);    
    await CreateLightboxContent(thePhotographer);
};

init();


