const Api_Url = 'http://localhost:3000/api/teddies'

async function getTeddies() {
    const response = await fetch(Api_Url);
    const teddies = await response.json();
    
    for ( teddy of teddies) {
        displayTeddy(teddy)
    }
}
function displayTeddy(Teddy){
    const templateElt = document.getElementById("templateTeddies")
    const cloneElt = document.importNode(templateElt.content, true)
    
    cloneElt.getElementById("teddy__Link").href += `?id=${teddy._id}`
    cloneElt.getElementById("mainTitle").textContent = teddy.name
    cloneElt.getElementById("teddy__img").src = teddy.imageUrl
    cloneElt.getElementById("teddy__Description").textContent = teddy.description
    cloneElt.getElementById("teddy__Price").textContent = teddy.price +="€"

    document.getElementById("container").appendChild(cloneElt)
}
getTeddies();

