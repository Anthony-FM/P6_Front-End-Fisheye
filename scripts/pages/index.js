    // import { photographerFactory } from "./factories/photographer.js";

    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographerJSON = await fetch ("./data/photographers.json");
        const photographers = await photographerJSON.json();
        console.log(photographers)
        // et bien retourner le tableau photographers seulement une fois
        return photographers;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            // console.log(photographerModel);
            const userCardDOM = photographerModel.getUserCardDOM();
            // console.log(userCardDOM);
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    