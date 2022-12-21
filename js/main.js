let cardWrapper=$('.card-wrapper');



function newcards (array, node){
    node.innerHTML=''
    for(film of array){
  
        let card=document.createElement('div');
        card.setAttribute('class', 'card text-white col-3');
    
        card.innerHTML=`
            <div class="img-wrapper">
                <img class="card-img" src="${film.poster}" alt="${film.title}">
            </div>
            <h2 class="text-center my-3 text-white fs-4">${film.title}</h2>
            <p class="text-center text-info">${film.genres}</p>
            <div class=" card-text">
                <p class="fs-6 text-white  text">
                ${film.overview}
                </p>
            </div>
           
           
         
        `;
    
    
        node.appendChild(card);
    }
}


newcards(films, cardWrapper);



let elFrom = document.querySelector('.form');
let elInput = document.querySelector('input');

let newArray=[];

elFrom.addEventListener('input',(evt)=>{
    evt.preventDefault();
    cardWrapper.innerHTML=''
    let elInputValue=elInput.value.toLocaleLowerCase();

    films.forEach((el)=>{
        if(el.title.toLocaleLowerCase().includes(elInputValue)){
            newArray.push(el)
        }
    });
    newcards(newArray, cardWrapper)
    newArray=[]
});

// select optin 

let elSelect=$('#genres');

let arr=[];

films.forEach((item)=>{
    item.genres.forEach((genres)=>{
       if(!arr.includes(genres)){
        arr.push(genres);
    };
})
})

for(i of arr){
    let option=document.createElement('option');
    option.value=i;
    option.textContent=i;
    elSelect.appendChild(option)
}


let newArr=[];
elSelect.addEventListener('change',(e)=>{
    newArr=[]
    
if(elSelect.value!=="All"){
    films.forEach((film)=>{
        if(film.genres.includes(elSelect.value)){
            newArr.push(film)
        }
    })
    newcards(newArr, cardWrapper)
}else{
    newcards(films, cardWrapper)
}
e.preventDefault()
    
})

// sort
let elSelect2=$('#sort');


elSelect2.addEventListener('change',(e)=>{
    let elSelect2Val=elSelect2.value;
    if(elSelect2Val != "Sort"){
        if(elSelect2Val == "A-Z"){
            const filmSort = films.sort((a, b)=> a.title.charCodeAt(0)-b.title.charCodeAt(0));
            newcards(filmSort, cardWrapper);
        }
        else if(elSelect2Val == "Z-A"){
            const filmSort2 = films.sort((a, b)=> b.title.charCodeAt(0)-a.title.charCodeAt(0));
            newcards(filmSort2, cardWrapper);
        }
    }
    else{
        window.location.reload();
    }
    
    e.preventDefault();
})


let btnTop=$('.top');

window.addEventListener("scroll", (e)=>{
  if(window.scrollY > 100){
    btnTop.style.display="block"
  }
  else{
    btnTop.style.display="none"
  }
})