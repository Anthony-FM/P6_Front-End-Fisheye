 function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;  // récupération des données via "data"
    // console.log({name,city,country,portrait, tagline, price});

    const picture = `assets/Photographers_ID_Photos/${portrait}`; // ajout dans la constante "picture" le lien vers le dossier des photos

    function getUserCardDOM() { // Création des articles du DOM pour chaque photographeurs
        const article = document.createElement( 'article' ); // Création de la balise article

        const sectionImageArticle = document.createElement( 'section' ); // création de la section cliquable
        sectionImageArticle.className = "photographer_pictureName";

        const sectionImageArticleLink = document.createElement( 'a' ); // Création des liens
        sectionImageArticleLink.appendChild(sectionImageArticle);
        sectionImageArticleLink.setAttribute("id", id);
        sectionImageArticleLink.setAttribute("href", `photographer.html?id=${id}&${name}`);

        const footerImageArticle = document.createElement( 'footer' ); // création du footer pour le contenu

        const img = document.createElement( 'img' ); // création de la balise photo
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Profil de " + name);
        sectionImageArticle.appendChild(img); // ajout de l'image dans la div image

        const h2 = document.createElement( 'h2' ); // création du titre h2 pour les noms des photographes
        h2.textContent = name;
        sectionImageArticle.appendChild(h2);

        const pCountry = document.createElement( 'h3' ); // Création des titre h3 pour les villes et pays de chaque photographe
        pCountry.className = "photographer_country";
        pCountry.textContent = city + ", " + country;
        footerImageArticle.appendChild(pCountry);

        const taglines = document.createElement( 'p' ); // Création d'un paragraphe "p" pour leur slogan
        taglines.className = "photographer_tagline";
        taglines.textContent = tagline;
        footerImageArticle.appendChild(taglines);

        const prices = document.createElement( 'p' ); // Création d'un paragraphe pour leur prix journalier
        prices.className = "photographer_price";
        prices.textContent = price + "€/jour";
        footerImageArticle.appendChild(prices);

        article.appendChild(sectionImageArticleLink); // Ajout de la section dans l'article
        article.appendChild(footerImageArticle); // Ajout du footer de l'article dans l'article
        return (article);
    }

    function getUserNameDOM() { // Fonction qui récupère uniquement les name, city/country et tagline

        const userTagName = document.createElement( 'article' );

        const userName = document.createElement( 'h1' ); // Création d'un h1 pour le prénom
        userName.className = "photographerPage_name";
        userName.textContent = name;

        const userCountry = document.createElement( 'p' ); // Création d'un p pour le pays et la ville du photographe
        userCountry.className = "photographerPage_country";
        userCountry.textContent = city + ", " + country;

        const userTagline = document.createElement( 'p' );
        userTagline.className = "photographerPage_tagline";
        userTagline.textContent = tagline;

        userTagName.appendChild(userName)
        userTagName.appendChild(userCountry)
        userTagName.appendChild(userTagline)

        return userTagName;
    }

    function getUserPictureDOM() { // fonction qui récupère uniquement la photo de profil du photographe
        
        const imgUser = document.createElement( 'img' ); // création de la balise photo
        imgUser.setAttribute("src", picture);
        imgUser.setAttribute("alt", "Profil de " + name);

        const userPicture = document.createElement( 'article' );
        userPicture.appendChild(imgUser)

        return userPicture;
    }

    return {name, id, city, country, tagline, price, portrait, getUserCardDOM, getUserNameDOM, getUserPictureDOM}
}


