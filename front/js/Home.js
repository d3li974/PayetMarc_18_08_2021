const UrlTeddies = 'http://localhost:3000/api/teddies'

fetch(UrlTeddies)
    .then( data => data.json())
    .then(jsonListteddies =>{
        console.log(jsonListteddies);
        for(let jsonteddies of jsonListteddies){
            let Teddies = new teddies(jsonteddies);
            document.querySelector('.container').innerHTML += `<div>
                                                                    <div class="CardTeddy">
                                                                    <h3>${Teddies.name}</h3>
                                                                        <div class="CardHeader">
                                                                        <img src="${Teddies.imageUrl}" alt="" class="imgTeddy">
                                                                        </div>
                                                                        <div class="CardBody">
                                                                            <p class="CardDescription">${Teddies.description}</p>
                                                                            <p class="CardPrice">${Teddies.price}€</p>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>`;

        }
    });