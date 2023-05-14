const commanderButtons = document.querySelectorAll(".commander");
let prixTotal = 0;
var howmuch = 0;
commanderButtons.forEach((button) => {
    
  button.addEventListener("click", () => {
    if(howmuch>10){
        alert("stop le panier peut comprendre juste 10 peluches");
    }
    howmuch++;
    console.log(howmuch);
    const produit = button.closest(".produit");
    const nouvelAchat = document.createElement("div");
    nouvelAchat.className = "achat";
    const imageProduit = document.createElement("img");
    imageProduit.src = produit.querySelector("img").src;
    nouvelAchat.appendChild(imageProduit);
    const nomPrixProduit = document.createElement("h4");
    const nom = produit.querySelector("h3").textContent;
    const prixString = produit.querySelector(".prix").textContent;//convertit prix 'string' en nombre 
      let prixNumerique = "";
      for (let i = 0; i < prixString.length; i++) {
        const caractere = prixString[i];
        if (!isNaN(caractere) || caractere === "." || caractere === "-") {
          prixNumerique += caractere;
        }
      }
    const prix = parseFloat(prixNumerique);
    const quantite = Number(produit.querySelector(".maininput").value);
    const prixTotalProduit = prix * quantite;
    nomPrixProduit.textContent = `${nom} - ${prixTotalProduit.toFixed(2)} MAD`;
    nouvelAchat.appendChild(nomPrixProduit);
    const listeAchats = document.querySelector(".achats");
    // pour supprimer l'élément nouvelAchat
    listeAchats.appendChild(nouvelAchat);
    const imageTelechargement2 = document.createElement("img");
    imageTelechargement2.src = "s.png";
    nouvelAchat.appendChild(imageTelechargement2);
    imageTelechargement2.addEventListener("click", () => {
      listeAchats.removeChild(nouvelAchat);
      prixTotal += prixTotalProduit;
      const prixTotalElement = document.querySelector(".prixtotal");
      prixTotalElement.textContent = `Total : ${prixTotal.toFixed(2)} MAD`;
    });
  });

});
// la barre de recherche ! Rq: mettre dans la barre de recherche le nom total du produit !
const inputRecherche = document.querySelector("#filter");
inputRecherche.addEventListener("keydown", (event) => {// "keydown" pour détecter la touche "Entrée"
  if (event.key === "Enter") {
    const valeurRecherche = inputRecherche.value.toLowerCase();
    const produits = document.querySelectorAll(".produit");
    let produitTrouve = false;//indiquer qu'au début aucun produit n'a encore été trouvé
    produits.forEach((produit) => {
      const nomProduit = produit.querySelector("h3").textContent.toLowerCase();
      if (nomProduit === valeurRecherche) {
        produit.style.backgroundColor = "blue";
        produitTrouve = true;
      } else {
        produit.style.backgroundColor = "";
      }
    });
    const divProduit = document.querySelector(".produit");
    if (!produitTrouve) {
      inputRecherche.style.backgroundColor = "red";
      inputRecherche.value = "";
      inputRecherche.placeholder = "Ce produit n'existe pas";
    } else {
      inputRecherche.style.backgroundColor = "";
      inputRecherche.placeholder = "Rechercher des produits...";
    }
  }

});

