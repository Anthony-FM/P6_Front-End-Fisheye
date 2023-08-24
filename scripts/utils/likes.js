// Fonction permettant de basculer d'un coeur vide a un coeur plein
// tout en ajoutant ou soustrayant la valeur total de like sur la photo
function likesUpLikesDown(data, keyArray){  
    const media = data.media;
    const heart = document.querySelectorAll(".heart-container em");
    const heartNumber = document.querySelectorAll(".heart-number");

    if(heart[keyArray].classList.contains("fa-regular")){
        heart[keyArray].classList.replace("fa-regular", "fa-solid");
        heart[keyArray].classList.add("heart");
        heartNumber[keyArray].textContent = "";
        heartNumber[keyArray].textContent = media[keyArray].likes + 1;
        heartNumber[keyArray].setAttribute('title', `La photo a ${media[keyArray].likes + 1} likes .`);
        heart[keyArray].setAttribute('title', `La photo a ${media[keyArray].likes + 1} likes . Cliquez pour ajouter ou retirer un like`);
        likes();
    } else {
        heart[keyArray].classList.replace("fa-solid", "fa-regular");
        heart[keyArray].classList.remove("heart");
        heartNumber[keyArray].textContent = "";
        heartNumber[keyArray].textContent = media[keyArray].likes;
        heartNumber[keyArray].setAttribute('aria-label', `La photo a ${media[keyArray].likes} likes .`);
        heart[keyArray].setAttribute('aria-label', `La photo a ${media[keyArray].likes} likes . Cliquez pour ajouter ou retirer un like`);
        likes();
    }
}

// fonction permettant d'activer la fonction "likesUpLikesDown(keyArray)" a la pression du bouton "entrer" ou "espace"
function likesUpLikesDownByKeydown(event, keyArray){
    const keyCode = event.keycode ? event.keycode : event.which;
    if(keyCode === 13 || keyCode === 32){
        likesUpLikesDown(data, keyArray);
    } 
}

// Au click de l'utilisateur, le coeur se rempli ou se vide.
// le nombre de like de la photo augmente de +1 ou diminue de -1
function upOrDownLike(data) {    
    const heart = document.querySelectorAll(".heart-container em");
    for(i=0; i<heart.length; i++){
        let keyArray = i;
        if(heart[i]){
            heart[i].addEventListener('keydown', (event) => {
                likesUpLikesDownByKeydown(data, event, keyArray) 
            })
            heart[i].addEventListener('click', () => {
                likesUpLikesDown(data, keyArray) 
            })
        }
    }
} 

// Fonction qui ajoute ou enlève un like au nombre total de likes de toutes les photos
async function likes(){
    const id = await getUrlID();
    const data = await getPhotographer(id);
    const datalikes = mediaFactory(data)
    let totals = datalikes.getTotalLikes();
    const hearts = document.querySelectorAll(".heart-container em");
    totals = totals + hearts.length - 1
    for(i=0; i<hearts.length; i++){
        
        if(hearts[i].classList.contains("fa-regular")){
            
            document.querySelector('.hearts-number').innerHTML = `${totals--} <em class="fa-solid fa-heart" aria-hidden="true" title="Nombre de like total de toutes les photos"></em><br/>
            <span class="screenreader-text">Nombre de like pour ce photographe  </span>`;
            
        }         
    }
    return totals
}

