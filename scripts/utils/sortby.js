const popularite = document.getElementById("sortPopularite");
const date= document.getElementById("sortDate");
const title = document.getElementById("sortTitle");

const populariteBtn = document.getElementById("Popularite")
const dateBtn = document.getElementById("Date")
const titleBtn = document.getElementById("Title")




function selectPopulariteSort() {
    populariteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
            let arrow = document.querySelector("#sortPopularite .fa-chevron-down");
            arrow.style.display = "none";
            popularite.classList.remove("hidden-sort");
            popularite.style.borderBottom = "#FFFFFF 1px solid";
            date.style.borderBottom = "#FFFFFF 1px solid";
            title.style.borderBottom = "none";
            date.classList.remove("hidden-sort"); 
            title.classList.remove("hidden-sort"); 
            
            
        } else {
            
            let arrow = document.querySelector("#sortPopularite .fa-chevron-down");
            arrow.style.display = "block"; 
            date.classList.add("hidden-sort");
            title.classList.add("hidden-sort");
            popularite.style.borderBottom = "none";
        } 
    });
}

selectPopulariteSort();


function selectDateSort() {
   dateBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
        let arrow = document.querySelector("#sortDate .fa-chevron-down");
        arrow.style.display = "none";
        date.style.borderBottom = "#FFFFFF 1px solid";
        popularite.style.borderBottom = "#FFFFFF 1px solid";
        title.style.borderBottom = "none";
        popularite.classList.remove("hidden-sort"); 
        title.classList.remove("hidden-sort");         
        
    } else {
        let arrow = document.querySelector("#sortDate .fa-chevron-down");
        arrow.style.display = "block"; 
        popularite.classList.add("hidden-sort");
        title.classList.add("hidden-sort");
        date.style.borderBottom = "none";
        
    }
    
   });
}

selectDateSort();

function selectTitleSort() {
   titleBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    if((popularite.classList.contains("hidden-sort")) || (date.classList.contains("hidden-sort")) || (title.classList.contains("hidden-sort"))){
        
        popularite.classList.remove("hidden-sort"); 
        date.classList.remove("hidden-sort");
        let arrow = document.querySelector("#sortTitle .fa-chevron-down");
        arrow.style.display = "none";
        date.style.borderBottom = "#FFFFFF 1px solid";
        popularite.style.borderBottom = "#FFFFFF 1px solid";
        title.style.borderBottom = "none";
        
    }  else {
        let arrow = document.querySelector("#sortTitle .fa-chevron-down");
        arrow.style.display = "block"; 
        popularite.classList.add("hidden-sort");
        date.classList.add("hidden-sort");
          
    } 
   });
}

selectTitleSort();

// function openModalePopulariteSort(){
//     populariteBtn.addEventListener('click', (e) => {
//         e.stopPropagation();

        
//         let arrow = document.querySelector("#sortPopularite .fa-chevron-down");
//         arrow.style.display = "none";
//         popularite.classList.remove("hidden-sort");
//         popularite.style.borderBottom = "#FFFFFF 1px solid";
//         date.style.borderBottom = "#FFFFFF 1px solid";
//         title.style.borderBottom = "none";
//         date.classList.remove("hidden-sort"); 
//         title.classList.remove("hidden-sort");        
        
        
//     });
// }
// function openModaleDateSort(){
//     dateBtn.addEventListener('click', (e) => {
//         e.stopPropagation();
//         let arrow = document.querySelector("#sortDate .fa-chevron-down");
//         arrow.style.display = "none";
//         date.style.borderBottom = "#FFFFFF 1px solid";
//         popularite.style.borderBottom = "#FFFFFF 1px solid";
//         title.style.borderBottom = "none";
//         popularite.classList.remove("hidden-sort"); 
//         title.classList.remove("hidden-sort");   
        
//     });
// }
// function openModaleTitleSort(){
//     titleBtn.addEventListener('click', (e) => {
//         e.stopPropagation();
//         let arrow = document.querySelector("#sortTitle .fa-chevron-down");
//         arrow.style.display = "none";
//         title.classList.remove("hidden-sort");
//         date.style.borderBottom = "#FFFFFF 1px solid";
//         popularite.style.borderBottom = "#FFFFFF 1px solid";
//         title.style.borderBottom = "none";
//         popularite.classList.remove("hidden-sort"); 
//         date.classList.remove("hidden-sort");     
        
//     });
// }
