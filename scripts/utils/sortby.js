const btnContainer = document.querySelector(".btn-container");

const popularite = document.getElementById("sortPopularite");
const date= document.getElementById("sortDate");
const title = document.getElementById("sortTitle");

const populariteBtn = document.getElementById("Popularite")
const dateBtn = document.getElementById("Date")
const titleBtn = document.getElementById("Title")




function selectPopulariteSort(event) {
    
    event.stopPropagation();
    if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
        let arrow = document.querySelector("#sortPopularite .fa-chevron-down");
        arrow.style.display = "none";
        popularite.classList.remove("hidden-sort");
        popularite.style.borderBottom = "#FFFFFF 1px solid";
        popularite.removeAttribute("aria-selected","");
        popularite.removeAttribute("aria-activedescendant","Popularite");
        date.style.borderBottom = "#FFFFFF 1px solid";
        title.style.borderBottom = "none";
        date.classList.remove("hidden-sort"); 
        title.classList.remove("hidden-sort"); 
        btnContainer.setAttribute("aria-expanded","true");
        btnContainer.setAttribute("aria-pressed","false");
        
        
    } else {
        
        let arrow = document.querySelector("#sortPopularite .fa-chevron-down");
        arrow.style.display = "block"; 
        date.classList.add("hidden-sort");
        title.classList.add("hidden-sort");
        popularite.style.borderBottom = "none";
        popularite.setAttribute("aria-selected","");
        popularite.setAttribute("aria-activedescendant","Popularite");
        btnContainer.setAttribute("aria-expanded","false");
        btnContainer.setAttribute("aria-pressed","true");
    } 
   
}

function actionButtonKeydownHandlerPopularite(event) {
    // The action button is activated by space on the keyup event, but the
    // default action for space is already triggered on keydown. It needs to be
    // prevented to stop scrolling the page before activating the button.
    if (event.keyCode === 32) {
      event.preventDefault();
    }
    // If enter is pressed, activate the button
     if (event.keyCode === 13) {
      
      selectPopulariteSort(event);
    }
}

/**
 * Activates the action button with the space key.
 *
// * @param {KeyboardEvent} event
 */
function actionButtonKeyupHandlerPopularite(event) {
    if (event.keyCode === 32) {
        
        selectPopulariteSort(event);
    }
}

function selectDateSort(event) {
   
    event.stopPropagation();
    if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
        let arrow = document.querySelector("#sortDate .fa-chevron-down");
        arrow.style.display = "none";
        date.style.borderBottom = "#FFFFFF 1px solid";
        date.removeAttribute("aria-selected","");
        date.removeAttribute("aria-activedescendant","");
        popularite.style.borderBottom = "#FFFFFF 1px solid";
        title.style.borderBottom = "none";
        popularite.classList.remove("hidden-sort"); 
        title.classList.remove("hidden-sort");   
        btnContainer.setAttribute("aria-expanded","true");    
        btnContainer.setAttribute("aria-pressed","false");    
        
    } else {
        let arrow = document.querySelector("#sortDate .fa-chevron-down");
        arrow.style.display = "block"; 
        popularite.classList.add("hidden-sort");
        title.classList.add("hidden-sort");
        date.style.borderBottom = "none";
        date.setAttribute("aria-selected","");
        date.setAttribute("aria-activedescendant","");
        btnContainer.setAttribute("aria-expanded","false");
        btnContainer.setAttribute("aria-pressed","true");
              
    }
}

function actionButtonKeydownHandlerDate(event) {
    // The action button is activated by space on the keyup event, but the
    // default action for space is already triggered on keydown. It needs to be
    // prevented to stop scrolling the page before activating the button.
    if (event.keyCode === 32) {
      event.preventDefault();
    }
    // If enter is pressed, activate the button
     if (event.keyCode === 13) {
      
        selectDateSort(event);
    }
}

/**
 * Activates the action button with the space key.
 *
// * @param {KeyboardEvent} event
 */
function actionButtonKeyupHandlerDate(event) {
    if (event.keyCode === 32) {
        
        selectDateSort(event);
    }
}

function selectTitleSort(event) {
   
    event.stopPropagation();

    if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
        
        popularite.classList.remove("hidden-sort"); 
        date.classList.remove("hidden-sort");
        let arrow = document.querySelector("#sortTitle .fa-chevron-down");
        arrow.style.display = "none";
        date.style.borderBottom = "#FFFFFF 1px solid";
        popularite.style.borderBottom = "#FFFFFF 1px solid";
        title.style.borderBottom = "none";
        title.removeAttribute("aria-selected","");
        title.removeAttribute("aria-activedescendant","");
        btnContainer.setAttribute("aria-expanded","true");
        btnContainer.setAttribute("aria-pressed","false");
        
    }  else {
        let arrow = document.querySelector("#sortTitle .fa-chevron-down");
        arrow.style.display = "block"; 
        popularite.classList.add("hidden-sort");
        date.classList.add("hidden-sort");
        title.setAttribute("aria-selected","");
        title.setAttribute("aria-activedescendant","");
        btnContainer.setAttribute("aria-expanded","false"); 
        btnContainer.setAttribute("aria-pressed","true"); 
    } 
   
}

function actionButtonKeydownHandleTitle(event) {
    // The action button is activated by space on the keyup event, but the
    // default action for space is already triggered on keydown. It needs to be
    // prevented to stop scrolling the page before activating the button.
    if (event.keyCode === 32) {
      event.preventDefault();
    }
    // If enter is pressed, activate the button
     if (event.keyCode === 13) {
      
        selectTitleSort(event);
    }
}

/**
 * Activates the action button with the space key.
 *
// * @param {KeyboardEvent} event
 */
function actionButtonKeyupHandlerTitle(event) {
    if (event.keyCode === 32) {
        
        selectTitleSort(event);
    }
}

function initSort() {

    populariteBtn.addEventListener('click', selectPopulariteSort);
    populariteBtn.addEventListener('keydown', actionButtonKeydownHandlerPopularite);
    populariteBtn.addEventListener('keyup', actionButtonKeyupHandlerPopularite);
    
    dateBtn.addEventListener('click', selectDateSort);
    dateBtn.addEventListener('keydown', actionButtonKeydownHandlerDate);
    dateBtn.addEventListener('keyup', actionButtonKeyupHandlerDate);
    
    titleBtn.addEventListener('click', selectTitleSort);
    titleBtn.addEventListener('keydown', actionButtonKeydownHandleTitle);
    titleBtn.addEventListener('keyup', actionButtonKeyupHandlerTitle);

}
initSort();
