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
        totals = totals + 1 ;
        if(hearts[i].classList.contains("fa-regular")){
            totals = totals - 1;
            document.querySelector('.hearts-number').innerHTML = `${totals} <em class="fa-solid fa-heart" aria-hidden="true" title="Nombre de like total de toutes les photos"></em><br/>
            <span class="screenreader-text">Nombre de like pour ce photographe  </span>`;
        } 
    }
}

