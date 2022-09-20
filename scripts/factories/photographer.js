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
        sectionImageArticleLink.setAttribute("href", `photographer.html?${id}/${name}`);

        const footerImageArticle = document.createElement( 'footer' ); // création ddu footer pour le contenu

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

    return {getUserCardDOM}
}


