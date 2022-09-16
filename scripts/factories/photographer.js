 function photographerFactory(data) {
    const { name,city,country,tagline,price,portrait } = data;
    // console.log({name,city,country,portrait, tagline, price});

    const picture = `assets/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const div1 = document.createElement( 'div');
        const div2 = document.createElement( 'div');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        div1.appendChild(img);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        div1.appendChild(h2);

        const pCountry = document.createElement( 'p' );
        pCountry.className = "photographer_country";
        pCountry.textContent = city + ", " + country;
        div2.appendChild(pCountry);

        const taglines = document.createElement( 'p' );
        taglines.className = "photographer_tagline";
        taglines.textContent = tagline;
        div2.appendChild(taglines);

        const prices = document.createElement( 'p' );
        prices.className = "photographer_price";
        prices.textContent = price + "€/jour";
        div2.appendChild(prices);

        article.appendChild(div1);
        article.appendChild(div2);
        return (article);
    }
    
    return { name, picture, getUserCardDOM}
}