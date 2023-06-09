const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



/*
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1
//  Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
 */


// element of Dom
const containerEl = document.getElementById('container')
console.log(containerEl);


posts.forEach(post => {
    // console.log(post)
    console.log(post.author.name)
    let immagineProfilo;
    let imgNan = generatechartautor(post.author.name);
    // console.log(imgNan);
    if (post.author.image == null ) {
        immagineProfilo = `<div class="imgNan"><span class="fs-4">${imgNan}</span></div>  `
    } else { immagineProfilo = `<img class="profile-pic" src="${post.author.image}" alt="">`  }
    console.log(immagineProfilo)
    console.log(post);
    const postMarkup = generatePost(immagineProfilo, post)
    containerEl.insertAdjacentHTML('beforeend', postMarkup)
    
    
});



const btnLike = document.querySelector('.like-button')

// creato una funzone cliccato
function clickLike(id){
    // console.log('clickedPost', id)
    // ciclare sul array posts per capire quale bottone sto battendo
    posts.forEach(post => {
        // se id dell'array post è uguale all'id 
        if ( post.id == id) {
            post.likes += 1
        } 
    });
    console.log(posts);

 }


function generatePost(img, post) {
    console.log('post func', post)

    return `
  <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${img}               
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <button class="like-button border-0 js-like-button" data-postid="${post.id}" onclick="clickLike(${post.id})">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </button>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="${post.id}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`  
}




function generatechartautor(autor) {
    // separo la stringa tra nome e cognome
    // console.log(autor)
    const splitNameSurname = autor.split(' ')
    console.log('separazione nome e cosnome',splitNameSurname)
    // recuperaro il nome
    let autorName = splitNameSurname[0]
    // recuperaro il cognome
    let autorSurname = splitNameSurname[1]
    
    // console.log(autorName);
    // console.log(autorSurname);
    const firstChartName = autorName.charAt(0);
    const firstChartSurname = autorSurname.charAt(0);
    // console.log(firstChartName)
    // console.log(firstChartSurname)
    
    const imgNan = firstChartName + firstChartSurname
    return imgNan
}



