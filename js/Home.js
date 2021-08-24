/* declaration de l'api */
const UrlTeddies = 'http://localhost:3000/api/teddies'


/* Recuperation de l'api */
fetch(UrlTeddies)
    /* on passe la data de l'api en json */
    .then( data => data.json())
    .then(jsonListteddies =>{
        /* on recupere les donnés dans la cosole pour cerifier qu'on l'a bien recupéré */
        console.log(jsonListteddies);
        /* on boucle avec for pour recuperer les iterations dans l'api */
        for(let jsonteddies of jsonListteddies){
            let teddies = new Teddies(jsonteddies);
            /* on cré notre html a partir de container qui est deja créé dans l'html et on lui injecte les produits */
            document.querySelector('.container').innerHTML += `     
                <a href= "${teddies._id}">
                    <div class="CardTeddy">
                        <h3>${teddies.name}</h3>
                        <div class="CardHeader">
                            <img src="${teddies.imageUrl}" alt="" class="imgTeddy">
                        </div>
                        <div class="CardBody">
                            <p class="CardDescription">${teddies.description}</p>
                            <p class="CardPrice">${(teddies.price / 100)}€</p>
                        </div>
                    </div>
                </a>`;

        }
    });