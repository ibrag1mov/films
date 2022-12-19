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
            <div class=" card-text">
                <p class="fs-6 text-primary text">
                ${film.overview}
                </p>
            </div>
           
            <button type="button" class="btn btn-primary w-25 more-btn">More...</button>
         
        `;
    
    
        node.appendChild(card);
    }
}


newcards(films, cardWrapper);
