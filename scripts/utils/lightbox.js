// Fonction fermant la lightbox
function closeLightbox(){

    const lightbox = document.getElementById('lightbox');
    const mainDOM = document.getElementById("main");
    const headerDOM = document.getElementById("header");
    const totalPrices = document.querySelector('.count-container');
    const articleActive = document.querySelector('.active');
    
    if(articleActive.classList.contains("active")){
        articleActive.classList.remove("active");
    }

    lightbox.style.display = "none";
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.removeAttribute('aria-current','page');
    
    mainDOM.style.opacity = "1";
    mainDOM.setAttribute('aria-hidden', 'false');
    mainDOM.setAttribute('aria-current','page')
    mainDOM.focus();        
    
    headerDOM.style.opacity = "1";
    headerDOM.setAttribute('aria-hidden', 'false');

    totalPrices.style.opacity = "1";
    totalPrices.setAttribute('aria-hidden', 'false');    
}

//Fonction qui ferme la lightbox en utilisant la fonciton "closeLightbox()" via le bouton "escape"
function closeLightboxByKeydownEscape(event){
    const keycode = event.keycode ? event.keycode : event.which;  
    if(keycode===27 ){
        closeLightbox();
    }
}
//Fonction qui ferme la lightbox en utilisant la fonciton "closeLightbox()" via le bouton "entrer ou espace"
function closeLightboxByKeydown(event){
    const keycode = event.keycode ? event.keycode : event.which;  
    if(keycode === 13 || keycode === 32){
        closeLightbox();
    }
}

// Fonction qui écoute l'action de l'utilisateur et réagit en utilisant la bonne fonction
function closeLightboxBtn(){
    const closeBtn = document.querySelector( '.close-lightbox em' );
    closeBtn.addEventListener('click', () => {
        closeLightbox();
    })
    closeBtn.addEventListener('keydown', (event) => {
        closeLightboxByKeydown(event);
    })
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('keydown', (event) => {
        closeLightboxByKeydownEscape(event);
    })
}
closeLightboxBtn();

// Fonction ouvrant la lightbox
function openLightbox(){
    const lightbox = document.querySelector('.lightbox-modal');
    const mainDOM = document.getElementById("main");
    const headerDOM = document.getElementById("header");
    const totalPrices = document.querySelector('.count-container');
    const contactModal = document.getElementById("contact_modal") 
           
    lightbox.style.display = "flex";
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.setAttribute('aria-current','page');
    lightbox.focus();
    
    mainDOM.style.opacity = "0.5";
    mainDOM.setAttribute('aria-hidden', 'true');
    
    headerDOM.style.opacity = "0.5";
    headerDOM.setAttribute('aria-hidden', 'true');

    totalPrices.style.opacity = "0.5";
    totalPrices.setAttribute('aria-hidden', 'true');   
    
    contactModal.setAttribute('aria-hidden', 'true'); 
   
}

//Fonction ouvrant la lightbox selon l'id selectionné
function displayLightbox(id){   
    console.log(id);
    const imageLightbox = document.getElementById("1" + id);
    if(imageLightbox. id){
        imageLightbox.classList.add("active");        
        imageLightbox.setAttribute("aria-hidden","false");        
        openLightbox();
    } 
}

//Fonction ouvrant la lightbox avec les Keycode "entrer" et "espace"
function opencLightboxWithButton() {
    const imagesForLightbox = document.querySelectorAll(".picture-container img, .picture-container video");
    for(i=0; i<imagesForLightbox.length; i++){
        const id = imagesForLightbox[i].id;
        imagesForLightbox[i].addEventListener('keydown', (event) => {            
            const keyCode = event.keycode ? event.keycode : event.which;
            if(keyCode === 13 || keyCode === 32){
                displayLightbox(id);
            } 
        })
    }    
}


// Fonction qui ouvre la photo précédente et ferme le reste
function getPreviousPicture(){
    
    let allArticles = document.querySelectorAll(".lightbox-pictures-article");
    for(i=0; i< allArticles.length; i++){
        if(allArticles[i].classList.contains("active") && i > 0){
            allArticles[i-1].classList.add("active");
            allArticles[i-1].setAttribute("aria-hidden","false");
            allArticles[i].classList.remove("active");
            allArticles[i].setAttribute("aria-hidden","true");
        } else if (allArticles[i].classList.contains("active") && i == 0){
            allArticles[i].classList.remove("active");
            allArticles[i].setAttribute("aria-hidden","true");
            console.log(allArticles.length)
            console.log(allArticles[i])
            allArticles[allArticles.length - 1].classList.add("active");
            allArticles[allArticles.length - 1].setAttribute("aria-hidden","false");

        }
    }
}

// Fonction qui ouvre la photo précédente a la pression de la flèche gauche
function getPreviousPictureByKeydowLeft(event){
    const keycode = event.keycode ? event.keycode : event.which;  
    if(keycode === 37){
    getPreviousPicture();
  }
}

// Fonction qui ouvre la photo précédente a la pression du bouton "entrer"
function getPreviousPictureByKeydowEnter(event){
    const keycode = event.keycode ? event.keycode : event.which;  
    if(keycode===13){
    getPreviousPicture();
  }
}

// Fonction qui écoute l'action de l'utilisateur et suivant son action, ouvre la photo précédente
function previousPicture(){
    const previousBtn = document.querySelector(".left-arrow em");
    previousBtn.addEventListener('click', () => {
        getPreviousPicture();
    })
    previousBtn.addEventListener('keydown', (event) => {
        getPreviousPictureByKeydowEnter(event);
    })
    const lightbox = document.getElementById("lightbox");
    lightbox.addEventListener('keydown', (event) => {
        getPreviousPictureByKeydowLeft(event);
    })
}
previousPicture();

// Fonction qui ouvre la photo suivante et ferme le reste
function getNextPicture()
{
    let allArticles = document.querySelectorAll(".lightbox-pictures-article");

    for(i = allArticles.length - 1; i > -1; i--){
        if(allArticles[i].classList.contains("active") && (i < allArticles.length -1)){
            allArticles[i].classList.remove("active");
            allArticles[i].setAttribute("aria-hidden","true");
            allArticles[i+1].classList.add("active");
            allArticles[i+1].setAttribute("aria-hidden","false");
            console.log(allArticles[i])
        } else if (allArticles[i].classList.contains("active") && i == allArticles.length - 1){
            allArticles[i].classList.remove("active");
            allArticles[i].setAttribute("aria-hidden","true");
            console.log("blabla" + allArticles[0])
            allArticles[i=0].classList.add("active");
            allArticles[i=0].setAttribute("aria-hidden","false");

        }
    }
}

// Fonction qui ouvre la photo suivante a la pression du bouton "entrer"
function getNextPictureByKeydowEnter(event){
    const keycode = event.keycode ? event.keycode : event.which;  
    if(keycode === 13){
    getNextPicture();
  }
}

// Fonction qui ouvre la photo suivante a la pression de la flèche droite
function getNextPictureByKeydowRigth(event){
    const keycode = event.keycode ? event.keycode : event.which;  
    if(keycode=== 39){
    getNextPicture();
  }
}

// Fonction qui écoute l'action de l'utilisateur et suivant son action, ouvre la photo suivante
function nextPicture(){
    const nextBtn = document.querySelector(".right-arrow em");
    nextBtn.addEventListener('click', () => {
        getNextPicture();
    });
    nextBtn.addEventListener('keydown', (event) => {
        getNextPictureByKeydowEnter(event);
    });
    const lightbox = document.getElementById("lightbox");
    lightbox.addEventListener('keydown', (event) => {
        getNextPictureByKeydowRigth(event);
    });        
}
nextPicture();