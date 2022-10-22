// La Factory photographerFactory(data)
// Permet de créer des objets selon les données envoyé en argument.
// Elle crée des objets sur les information du photographe
function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait, ...media} = data;  // récupération des données via "data"
    // console.log({name,city,country,portrait, tagline, price});

    const picture = `assets/Photographers_ID_Photos/${portrait}`; // ajout dans la constante "picture" le lien vers le dossier des photos

    // Création des articles du DOM pour chaque photographeurs
    function getUserCardDOM() { 
        const article = document.createElement( 'article' ); // Création de la balise article
        article.setAttribute("aria-label", `Selectionné du profil du photographe ${name}`)

        const sectionImageArticle = document.createElement( 'section' ); // création de la section cliquable
        sectionImageArticle.className = "photographer_pictureName";

        const sectionImageArticleLink = document.createElement( 'a' ); // Création des liens
        sectionImageArticleLink.appendChild(sectionImageArticle);
        sectionImageArticleLink.setAttribute("id", id);
        sectionImageArticleLink.setAttribute("href", `photographer.html?id=${id}&${name}`);
        sectionImageArticleLink.setAttribute("tabindex", "2"); 

        const footerImageArticle = document.createElement( 'footer' ); // création du footer pour le contenu

        const img = document.createElement( 'img' ); // création de la balise photo
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Profil de " + name );
        img.setAttribute("tabindex", "2");  
        sectionImageArticle.appendChild(img); // ajout de l'image dans la div image

        const h2 = document.createElement( 'h2' ); // création du titre h2 pour les noms des photographes
        h2.textContent = name;
        h2.setAttribute("tabindex", "2");  
        sectionImageArticle.appendChild(h2);

        const paragrapheForCountry = document.createElement( 'h3' ); // Création des titre h3 pour les villes et pays de chaque photographe
        paragrapheForCountry.className = "photographer_country";
        paragrapheForCountry.setAttribute("tabindex", "2");  
        paragrapheForCountry.textContent = city + ", " + country;
        footerImageArticle.appendChild(paragrapheForCountry);

        const taglines = document.createElement( 'p' ); // Création d'un paragraphe "p" pour leur slogan
        taglines.className = "photographer_tagline";
        taglines.setAttribute("tabindex", "2");  
        taglines.textContent = tagline;
        footerImageArticle.appendChild(taglines);

        const prices = document.createElement( 'p' ); // Création d'un paragraphe pour leur prix journalier
        prices.className = "photographer_price";
        prices.setAttribute("tabindex", "2  ");  
        prices.textContent = price + "€/jour";
        footerImageArticle.appendChild(prices);

        article.appendChild(sectionImageArticleLink); // Ajout de la section dans l'article
        article.appendChild(footerImageArticle); // Ajout du footer de l'article dans l'article
        return (article);
    }

    // Fonction qui récupère uniquement les name, city/country et tagline
    function getUserNameDOM() { 

        const userTagName = document.createElement( 'article' );

        const userName = document.createElement( 'h1' ); // Création d'un h1 pour le prénom
        userName.className = "photographerPage_name";
        userName.textContent = name;
        userName.setAttribute("tabindex","2");

        const userCountry = document.createElement( 'p' ); // Création d'un p pour le pays et la ville du photographe
        userCountry.className = "photographerPage_country";
        userCountry.textContent = city + ", " + country;
        userCountry.setAttribute("tabindex","2");

        const userTagline = document.createElement( 'p' );
        userTagline.className = "photographerPage_tagline";
        userTagline.textContent = tagline;
        userTagline.setAttribute("tabindex","2");

        userTagName.appendChild(userName)
        userTagName.appendChild(userCountry)
        userTagName.appendChild(userTagline)

        return userTagName;
    }

    // fonction qui récupère uniquement la photo de profil du photographe
    function getUserPictureDOM() { 
        
        const imgUser = document.createElement( 'img' ); // création de la balise photo
        imgUser.setAttribute("src", picture);
        imgUser.setAttribute("alt", "Profil de " + name);
        imgUser.setAttribute("tabindex","2");

        const userPicture = document.createElement( 'article' );
        userPicture.appendChild(imgUser)

        return userPicture;

    }    

    // La Factory photographerFactory(data) retourne toutes ses données et fonctions()
    // Ces fonctiones pourront être appelées plutard
    return {name, id, city, country, tagline, price, portrait, media, getUserCardDOM, getUserNameDOM, getUserPictureDOM}
}

function mediaFactory(data){
    const {id, photographerId, title, image, likes, date, price, urlName, video} = data;
    
    // Fonction qui générera tous les articles incluant les medias de la page du photographe
    function getUserMediasDOM() {
        let articlePicture = document.createElement( 'article' );
        articlePicture.className = "article-pictures";

        let header = document.createElement( 'header' );
        header.className = "picture-container";        

        let imgPictures = document.createElement( 'img' );
        imgPictures.setAttribute("src", `${urlName}`);
        imgPictures.setAttribute("alt", title );
        imgPictures.setAttribute('id', id);
        imgPictures.setAttribute('onclick', "displayLightbox(id)");
        imgPictures.setAttribute("tabindex","6");

        let videoPictures = document.createElement( 'video' );
        // videoPictures.setAttribute("controls","");
        videoPictures.setAttribute("id", id);
        videoPictures.setAttribute('onclick', "displayLightbox(id)");
        videoPictures.setAttribute("title", "Video de" + title );
        let sourceVideo = document.createElement( 'source' );
        sourceVideo.setAttribute("src", urlName);
        sourceVideo.setAttribute("alt", "Video de" + title );
        sourceVideo.setAttribute("type", "video/mp4");
        sourceVideo.setAttribute("poster", "placeholder.png");
        videoPictures.appendChild(sourceVideo);
        videoPictures.setAttribute("tabindex","6");

        // Si la fonction trouve une image:
        if (image) {
            // elle ajoute l'image dans header
            header.appendChild(imgPictures);
        } else {
            //sinon elle ajoute la vidéo dans header
            header.appendChild(videoPictures);
        }

        let footerPicture = document.createElement( 'footer' );
        footerPicture.className = "footer-pictures";

        let titlePictures = document.createElement( 'h2' );
        titlePictures.className = "title-pictures";
        titlePictures.textContent = title;
        titlePictures.setAttribute("tabindex","6");
        footerPicture.appendChild(titlePictures)

        let heartNumberContainer = document.createElement( 'div' );
        heartNumberContainer.className = "heart-container";

        let heartNumber = document.createElement( 'p' );
        heartNumber.className = "heart-number";
        heartNumber.textContent = likes;
        heartNumber.setAttribute("tabindex","6");

        let heart = document.createElement( 'em' );
        heart.className = "fa-regular fa-heart";
        heart.setAttribute('role','button');                            
        heart.setAttribute("tabindex","6");
        // Ajout de la fonction likes() sur chaque photo
        // heart.setAttribute("onclick","likes()"); 

        
        heart.setAttribute('aria-hidden','false');
        heart.setAttribute("title", "likes");

        heartNumberContainer.appendChild(heartNumber);
        heartNumberContainer.appendChild(heart);

        footerPicture.appendChild(heartNumberContainer);

        articlePicture.appendChild(header);
        articlePicture.appendChild(footerPicture);
        return articlePicture;

    }

    // fonction qui génère l'objet ou le nombre total de like de toutes les photos
    // et le prix journaliers du photographe
    function getLikesNumbers() {
        let countContainer = document.createElement( 'aside');
        countContainer.className = "count-container";
        countContainer.setAttribute('aria-label', 'Nombre de likes total et Prix journalier du photographe');
        countContainer.setAttribute('tabindex', `7`);

        let totalHeartNumber = document.createElement( 'p' );
        totalHeartNumber.className = "hearts-number";
        
        let totals = 0;        
        for(let [key,value] of Object.entries(data.media))
        {
            totals = totals + value.likes; // nombre le likes total
        }
        
        totalHeartNumber.innerHTML = `${totals} <em class="fa-solid fa-heart" aria-hidden="true" title="Nombre de like total de toutes les photos"></em><br/>
        <span class="screenreader-text">Nombre de like pour ce photographe  </span>`;
        totalHeartNumber.setAttribute('tabindex', '7');

        let priceByDay = document.createElement( 'p' );
        priceByDay.setAttribute('id','priceByDay')
        priceByDay.innerHTML = `${price}€ / jour <br/>
        <span class="screenreader-text" aria-labelled="priceByDay">Prix par jour du photographe </span>`;
        priceByDay.setAttribute('tabindex', '7');

        countContainer.appendChild(totalHeartNumber);
        countContainer.appendChild(priceByDay);

        return countContainer;
    }   

    // Fonction qui génère les médias de la lightbox
    function getLightboxMedias(){
        let divPicture = document.createElement( 'div' );
        divPicture.className = "lightbox-picture-container";
        
        let imgBox = document.createElement('img');
        imgBox.setAttribute('src', urlName);
        imgBox.setAttribute('alt', title);
        imgBox.setAttribute('tabindex', "0");
        imgBox.className = "lightbox-pictures";

        let videoPictures = document.createElement( 'video' );
        videoPictures.setAttribute("controls","");
        videoPictures.setAttribute("id", id);
        videoPictures.className = "lightbox-pictures";
        let sourceVideo = document.createElement( 'source' );
        sourceVideo.setAttribute("src", urlName);
        sourceVideo.setAttribute("alt", "Video of" + title );
        sourceVideo.setAttribute("type", "video/mp4");
        sourceVideo.setAttribute("poster", "placeholder.png");
        videoPictures.appendChild(sourceVideo);
        videoPictures.setAttribute("tabindex","0");

        // Si la fonction trouve une image:
        if (image) {
            // elle ajoute l'image dans divPicture
            divPicture.appendChild(imgBox);
        } else {
            //sinon elle ajoute la vidéo dans divPicture
            divPicture.appendChild(videoPictures);
        }

        let titlePicture = document.createElement( 'h2' );
        titlePicture.textContent = title;
        titlePicture.setAttribute('tabindex', "0");

        let articlePicture = document.createElement('article');
        articlePicture.className = "lightbox-pictures-article";
        articlePicture.setAttribute("aria-hidden","true");
        articlePicture.setAttribute('id', "1"+ id);
        articlePicture.appendChild(divPicture);
        articlePicture.appendChild(titlePicture);

        return articlePicture;
    }

    // La Factory  mediaFactory(data) retourne toutes ses données et fonctions()
    // Ces fonctiones pourront être appelées plutard
    return {id, photographerId, title, image, likes, date, price, getUserMediasDOM, getLikesNumbers, getLightboxMedias}
}