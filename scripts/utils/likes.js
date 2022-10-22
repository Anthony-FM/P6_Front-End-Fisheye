// Fonction permettant de basculer d'un coeur vide a un coeur plein
// tout en ajoutant ou soustrayant la valeur total de like sur la photo
async function likesUpLikesDown(keyArray){
    const id = await getUrlID();
    const data = await getPhotographer(id);
    const media = data.media;
    const heart = document.querySelectorAll(".heart-container em");
    const heartNumber = document.querySelectorAll(".heart-number");

    if(heart[keyArray].classList.contains("fa-regular")){
        heart[keyArray].classList.replace("fa-regular", "fa-solid");
        heart[keyArray].classList.add("heart");
        heart[keyArray].setAttribute('aria-label', `La photo a ${media[keyArray].likes + 1} likes . Cliquez pour ajouter ou retirer un like`);
        heartNumber[keyArray].textContent = "";
        heartNumber[keyArray].textContent = media[keyArray].likes + 1;
        likes();
    } else {
        heart[keyArray].classList.replace("fa-solid", "fa-regular");
        heart[keyArray].classList.remove("heart");
        heartNumber[keyArray].textContent = "";
        heartNumber[keyArray].textContent = media[keyArray].likes;
        heart[keyArray].setAttribute('aria-label', `La photo a ${media[keyArray].likes} likes . Cliquez pour ajouter ou retirer un like`);
        likes();
    }
}

// fonction permettant d'activer la fonction "likesUpLikesDown(keyArray)" a la pression du bouton "entrer" ou "espace"
function likesUpLikesDownByKeydown(event, keyArray){
    const keyCode = event.keycode ? event.keycode : event.which;
    if(keyCode === 13 || keyCode === 32){
        likesUpLikesDown(keyArray);
    } 
}

// Au click de l'utilisateur, le coeur se rempli ou se vide.
// le nombre de like de la photo augmente de +1 ou diminue de -1
async function upOrDownLike() {    
    const heart = document.querySelectorAll(".heart-container em");
    for(i=0; i<heart.length; i++){
        let keyArray = i;
        heart[i].addEventListener('keydown', (event) => {
            likesUpLikesDownByKeydown(event, keyArray) 
        })
        heart[i].addEventListener('click', () => {
            likesUpLikesDown(keyArray) 
        })
    }
}   

// Fonction qui ajoute ou enlève un like au nombre total de likes de toutes les photos
async function likes(){
    const id = await getUrlID();
    const data = await getPhotographer(id);
    let totals = 0;  

    // Utiliasation du: for() Object.entrie pour rechercher toutes les valeurs d'un objet
    for(let [key,value] of Object.entries(data.media))
    {
        totals = totals + value.likes;
    };
    const hearts = document.querySelectorAll(".heart-container em");
    for(i=0; i<hearts.length; i++){
        totals ++ ;
        if(hearts[i].classList.contains("fa-regular")){
            totals --;
            document.querySelector('.hearts-number').innerHTML = `${totals} <em class="fa-solid fa-heart" aria-hidden="true" title="Nombre de like total de toutes les photos"></em><br/>
            <span class="screenreader-text">Nombre de like pour ce photographe  </span>`;
        }        
    }
}

