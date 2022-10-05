// import { getUrlID , getPhotographer } from "../pages/photographer.js";

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const mainDOM = document.getElementById("main");
    mainDOM.style.opacity = "0.5";
    const headerDOM = document.getElementById("header");
    headerDOM.style.opacity = "0.5";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    const mainDOM = document.getElementById("main");
    mainDOM.style.opacity = "1";
    const headerDOM = document.getElementById("header");
    headerDOM.style.opacity = "1";
}

// RegExp
//==================================================================
const nameRegex = /^([a-zA-Zéèîïêë]{2,})+$/g; // RegExp pour les Prénoms et Noms
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; // RegExp pour les adresses emails
//===================================================================

