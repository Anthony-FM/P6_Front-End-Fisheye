//============== Déclaration des variables =================
const btnContainer = document.querySelector(".btn-container");

const popularite = document.getElementById("sortPopularite");
const date= document.getElementById("sortDate");
const title = document.getElementById("sortTitle");

const populariteBtn = document.getElementById("Popularite")
const dateBtn = document.getElementById("Date")
const titleBtn = document.getElementById("Title")
//============== Déclaration des variables =================

// Fonction triant les photos par le nombre de likes en ordre décroissant
async function createSortByPopularity(){
    const id = await getUrlID();
    const thePhotographer = await getPhotographer(id);  
	const reordonatePicturesByPopularity = Array.from(thePhotographer.media);
	reordonatePicturesByPopularity.sort(function (a, b) {
		// B - A (et pas A - B) <= décroissant
		return b.likes - a.likes;
	});
    const media = reordonatePicturesByPopularity;
    const reordonatePicturesDataByPopularity = {...thePhotographer, media};
    document.querySelector(".user-pictures").innerHTML="";
    document.querySelector(".lightbox-pictures").innerHTML="";
    // On génère a nouveau les medias en fonction de "reordonatePicturesDataByPopularity"
    await displayMedias(reordonatePicturesDataByPopularity);
    await createLightboxContent(reordonatePicturesDataByPopularity);
    await createAllLikes(reordonatePicturesDataByPopularity);
    await upOrDownLike();
}

// Fonction qui ouvre le modal de trie ou selectionne le trie par popularité
// en selectionnant le trie par popularité, on actionne la fonction "createSortByPopularity()"

async function selectPopulariteSort(event) {
    
    event.stopPropagation();
    if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
        let arrow = document.querySelector("#sortPopularite .fa-chevron-down");
        arrow.style.display = "none";
        popularite.classList.remove("hidden-sort");
        popularite.style.borderBottom = "#FFFFFF 1px solid";
        popularite.removeAttribute("aria-selected","");
        popularite.removeAttribute("aria-activedescendant","Popularite");
        date.style.borderBottom = "#FFFFFF 1px solid";
        title.style.borderBottom = "none";
        date.classList.remove("hidden-sort"); 
        title.classList.remove("hidden-sort"); 
        btnContainer.setAttribute("aria-expanded","true");
        btnContainer.setAttribute("aria-pressed","false");
        
        
    } else {
        
        let arrow = document.querySelector("#sortPopularite .fa-chevron-down");
        arrow.style.display = "block"; 
        date.classList.add("hidden-sort");
        title.classList.add("hidden-sort");
        popularite.style.borderBottom = "none";
        popularite.setAttribute("aria-selected","");
        popularite.setAttribute("aria-activedescendant","Popularite");
        btnContainer.setAttribute("aria-expanded","false");
        btnContainer.setAttribute("aria-pressed","true");
              
        await createSortByPopularity();
    } 
   
}

// Fonction qui enclenche la fonction "selectPopulariteSort(event)" grâce a la pression des bouton "espace" et "entrer"
function actionButtonKeyupHandlerPopularite(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
        
        selectPopulariteSort(event);
    }
}

// Fonction triant les photos par la date de création en ordre décroissant
async function createSortBydate(){
    const id = await getUrlID();
    const thePhotographer = await getPhotographer(id); 
	const reordonatePicturesByDate = Array.from(thePhotographer.media);
    // console.log(reordonatePicturesByDate)
	reordonatePicturesByDate.sort(function (a, b) {
		//  A - B <= croissant
        // Date.parse permet de transformer la date en un nombre
		return Date.parse(b.date) - Date.parse(a.date);
	});
    const media = reordonatePicturesByDate;
    const reordonatePicturesDataByDate = {...thePhotographer, media};
    document.querySelector(".user-pictures").innerHTML="";
    document.querySelector(".lightbox-pictures").innerHTML="";
    // On génère a nouveau les medias en fonction de "reordonatePicturesDataByDate"
    await displayMedias(reordonatePicturesDataByDate);
    await createLightboxContent(reordonatePicturesDataByDate);
    await createAllLikes(reordonatePicturesDataByDate);
    await upOrDownLike();
}

// Fonction qui ouvre le modal de trie ou selectionne le trie par date de création
// en selectionnant le trie par date, on actionne la fonction "createSortBydate()"
function selectDateSort(event) {
   
    event.stopPropagation();
    if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
        let arrow = document.querySelector("#sortDate .fa-chevron-down");
        arrow.style.display = "none";
        date.style.borderBottom = "#FFFFFF 1px solid";
        date.removeAttribute("aria-selected","");
        date.removeAttribute("aria-activedescendant","");
        popularite.style.borderBottom = "#FFFFFF 1px solid";
        title.style.borderBottom = "none";
        popularite.classList.remove("hidden-sort"); 
        title.classList.remove("hidden-sort");   
        btnContainer.setAttribute("aria-expanded","true");    
        btnContainer.setAttribute("aria-pressed","false");    
        
    } else {
        let arrow = document.querySelector("#sortDate .fa-chevron-down");
        arrow.style.display = "block"; 
        popularite.classList.add("hidden-sort");
        title.classList.add("hidden-sort");
        date.style.borderBottom = "none";
        date.setAttribute("aria-selected","");
        date.setAttribute("aria-activedescendant","");
        btnContainer.setAttribute("aria-expanded","false");
        btnContainer.setAttribute("aria-pressed","true");
        createSortBydate();
              
    }
}

// Fonction qui enclenche la fonction "selectDateSort(event)" grâce a la pression des bouton "espace" et "entrer"
function actionButtonKeyupHandlerDate(event) {
    const keyCode = event.keycode ? event.keycode : event.which; 
    if (keyCode === 13 || keyCode === 32) {        
        selectDateSort(event);
    }
}

// Fonction triant les photos par la longueur de leurs titres en ordre décroissant
async function createSortBytitle(){
    const id = await getUrlID();
    const thePhotographer = await getPhotographer(id); 
	const reordonatePicturesByTitle = Array.from(thePhotographer.media);
	reordonatePicturesByTitle.sort(function (a, b) {
		// A - B en ordre croissant
		return a.title.localeCompare(b.title); // localCompare compare l'alphabet entre a et b
	});
    const media = reordonatePicturesByTitle;
    const reordonatePicturesDataByTitle = {...thePhotographer, media};
    document.querySelector(".user-pictures").innerHTML="";
    document.querySelector(".lightbox-pictures").innerHTML="";
    // On génère a nouveau les medias en fonction de "reordonatePicturesDataByTitle"
    await displayMedias(reordonatePicturesDataByTitle);
    await createLightboxContent(reordonatePicturesDataByTitle);
    await createAllLikes(reordonatePicturesDataByTitle);
    await upOrDownLike();
}


// Fonction qui ouvre le modal de trie ou selectionne le trie par longueur du Titre
// en selectionnant le trie par titre, on actionne la fonction "createSortBytitle()"
function selectTitleSort(event) {
   
    event.stopPropagation();

    if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
        
        popularite.classList.remove("hidden-sort"); 
        date.classList.remove("hidden-sort");
        let arrow = document.querySelector("#sortTitle .fa-chevron-down");
        arrow.style.display = "none";
        date.style.borderBottom = "#FFFFFF 1px solid";
        popularite.style.borderBottom = "#FFFFFF 1px solid";
        title.style.borderBottom = "none";
        title.removeAttribute("aria-selected","");
        title.removeAttribute("aria-activedescendant","");
        btnContainer.setAttribute("aria-expanded","true");
        btnContainer.setAttribute("aria-pressed","false");
        
    }  else {
        let arrow = document.querySelector("#sortTitle .fa-chevron-down");
        arrow.style.display = "block"; 
        arrow.style.color = "white";
        popularite.classList.add("hidden-sort");
        date.classList.add("hidden-sort");
        title.setAttribute("aria-selected","");
        title.setAttribute("aria-activedescendant","");
        btnContainer.setAttribute("aria-expanded","false"); 
        btnContainer.setAttribute("aria-pressed","true"); 
        createSortBytitle();
    } 
   
}

// Fonction qui enclenche la fonction "selectTitleSort(event)" grâce a la pression des bouton "espace" et "entrer"
function actionButtonKeyupHandlerTitle(event) {
    const keyCode = event.keycode ? event.keycode : event.which;
    if (keyCode === 13 || keyCode === 32) {        
        selectTitleSort(event);
    }
}

// Fonction qui écoute les actions de l'utilisateur
function initSort() {

    populariteBtn.addEventListener('click', selectPopulariteSort);
    populariteBtn.addEventListener('keyup', actionButtonKeyupHandlerPopularite);
    populariteBtn.addEventListener('keydown', actionButtonKeyupHandlerPopularite);
    
    dateBtn.addEventListener('click', selectDateSort);
    dateBtn.addEventListener('keyup', actionButtonKeyupHandlerDate);
    dateBtn.addEventListener('keydown', actionButtonKeyupHandlerDate);
    
    titleBtn.addEventListener('click', selectTitleSort);
    titleBtn.addEventListener('keyup', actionButtonKeyupHandlerTitle);
    titleBtn.addEventListener('keydown', actionButtonKeyupHandlerTitle);

}
initSort();