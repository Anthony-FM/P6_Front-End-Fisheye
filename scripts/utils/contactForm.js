 function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
  modal.setAttribute('aria-hidden', 'false')
  const mainDOM = document.getElementById("main");
  mainDOM.style.opacity = "0.5";
  mainDOM.setAttribute('aria-hidden', 'true');
  const headerDOM = document.getElementById("header");
  headerDOM.style.opacity = "0.5";
  headerDOM.setAttribute('aria-hidden', 'true');
  modal.focus();
  modal.setAttribute('aria-current','page');
}

function closeModal() {
    
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  modal.setAttribute('aria-hidden', 'true')
  const mainDOM = document.getElementById("main");
  mainDOM.style.opacity = "1";
  mainDOM.removeAttribute('aria-hidden', 'false');
  const headerDOM = document.getElementById("header");
  headerDOM.style.opacity = "1";
  headerDOM.removeAttribute('aria-hidden', 'false');
  modal.removeAttribute('aria-current','page')
}

function escapeCloseModal(event){
  const keycode = event.keycode ? event.keycode : event.which;
  const modal = document.getElementById("contact_modal");
  if(modal.getAttribute('aria-hidden') == "false" && (keycode === 27)){
    closeModal();
  }
}

function closeModalKeydown(event){
  const keycode = event.keycode ? event.keycode : event.which;  
  if(keycode === 13){
    closeModal();
  }
}

function closeModaleEvent() {
    document.getElementById("closeModal").addEventListener('click', closeModal);
    document.getElementById("closeModal").addEventListener('keydown', event => {
      closeModalKeydown(event)
    });
    document.getElementById("contact_modal").addEventListener('keydown', event => {
      escapeCloseModal(event)
    });

}
closeModaleEvent();


// RegExp
//==================================================================
const nameRegex = /^([a-zA-Zéèîïêë]{2,})+$/g; // RegExp pour les Prénoms et Noms
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; // RegExp pour les adresses emails
//===================================================================

async function getUrlID() {

    let params = (new URL(document.location)).searchParams;
    console.log(params);
    let id = parseInt(params.get('id'));
    console.log(id);

    return id;
}

async function getUserById(id) {
    const photographersJSON = await fetch ("./data/photographers.json");
    const photographersData = await photographersJSON.json();
    const photographers = photographersData.photographers;

    const photographer = photographers.filter( photographer => photographer.id === id)[0];
    return photographer;
}

async function putUserName(data) {
    const name = document.querySelector(".modal header h1");
    name.setAttribute('tabindex', '0')
    name.innerHTML = `Contacter-moi</br>
    ${data.name}`;
}

async function initName() {
  const id = await getUrlID();
  const data = await getUserById(id);
  putUserName(data);
}

initName();

const first = document.getElementById("firstName");
const last = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("messages");
const nameContact = document.querySelector(".modal header h1");

// Erreur First
let spanErrorFirst = document.createElement('span');
first.parentElement.appendChild(spanErrorFirst);
spanErrorFirst.classList.add('textError');

//Erreur Last
let spanErrorLast = document.createElement('span');
last.parentElement.appendChild(spanErrorLast);
spanErrorLast.classList.add('textError');

// Erreur email
let spanErrorEmail = document.createElement('span');
email.parentElement.appendChild(spanErrorEmail);
spanErrorEmail.classList.add('textError');

let firstTest = false;
first.addEventListener('input', function(event){  
  let firstValue = event.target.value;   

    if(firstValue.length < 2){      
      spanErrorFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstTest = false;

    } else if(!firstValue.match(nameRegex)){ 
      spanErrorFirst.textContent = "Ce champ requiere une prénom valide"; 
      firstTest = false;

    } else if(firstValue.match(nameRegex)){
      spanErrorFirst.textContent = "";  
      firstTest = true;
    }

    console.log("First name: "+ firstTest);
    return firstTest;
})

let lastTest = false;
last.addEventListener('input', function(event){  
  let lastValue = event.target.value;   

    if(lastValue.length < 2){      
      spanErrorLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastTest = false;

    } else if(!lastValue.match(nameRegex)){             
      spanErrorLast.textContent = "Ce champ requiere une nom valide"; 
      lastTest = false;

    } else if(lastValue.match(nameRegex)){
      spanErrorLast.textContent = ""; 
      lastTest = true; 

    }
    console.log("Last name: "+ lastTest);
    return lastTest;
})

let emailTest = false;
email.addEventListener('input', function(event){  
  let emailValue = event.target.value; 

    if(emailValue == ''){      
      spanErrorEmail.textContent = "Veuillez renseigner un Email";
      emailTest = false;

    } else if(!emailValue.match(emailRegex)){             
      spanErrorEmail.textContent = "Ce champ requiere un email valide"; 
      emailTest = false;

    } else if(emailValue.match(emailRegex)){
      spanErrorEmail.textContent = "";
      emailTest = true;  

    }
    console.log("email: "+ emailTest);
    return emailTest;
})


async function validate(event){
    event.preventDefault();
    event.stopPropagation();
    const nameContact = document.querySelector(".modal header h1");
    const nameContent = nameContact.textContent;
    const name = nameContent.substring(13);
  
    if(firstTest && lastTest && emailTest ){
        
      console.log(`Votre Prénom: ${first.value}
      Votre Nom: ${last.value}
      Votre adresse email: ${email.value}      
      Votre message a ${name}:

      ${message.value}`);

      // On supprime les données une fois que c'est validé et la page rafraichit
      first.value = "";
      last.value = "";
      email.value = "";
      message.value = "";
      // location.reload();
      
      return;
    }  
    // Si les valeurs ne sont pas remplie avant la validation, on averti l'utilisateur
    if(!first.value) {
      spanErrorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }
    if(!last.value){
      spanErrorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
    if (!email.value) {
      spanErrorEmail.innerHTML = "Veuillez renseigner un Email";
    }
  
  //test d'erreur lors de la validation
    console.log("prénom: " + firstTest + " nom: " + lastTest + " email: " + emailTest );
    
}