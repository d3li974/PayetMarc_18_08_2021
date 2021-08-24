
(async function (){
const teddyID = getTeddyID()
const teddy = await getTeddy(teddyID)
hydrateTeddy(teddy)
})()
function getTeddyID() {
    return new URL(location.href).searchParams.get("id")
}
function getTeddy(teddyID){
    return fetch(`http://localhost:3000/api/teddies/${teddyID}`)
    .then (function(data){
        return data.json()
    })
    .catch(function(error){
        alert(Erreur)
    })
}
function hydrateTeddy(teddy){
    const templateElt = document.getElementById("templateProduit")
  const cloneElt = document.importNode(templateElt.content, true)

  cloneElt.getElementById("mainTitle").textContent = teddy.name
  cloneElt.getElementById("teddy__img").src = teddy.imageUrl
  cloneElt.getElementById("teddy__Description").textContent = teddy.description
  cloneElt.getElementById("teddy__Price").textContent = teddy.price +="€"
  
  console.log(teddy.colors)
  
  document.getElementById("main").appendChild(cloneElt)
}