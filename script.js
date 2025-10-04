// Sélection des éléments du DOM
let totalPrice = document.querySelector(".total"); // Span qui affiche le total
let heart = document.querySelectorAll(".fa-heart"); // Tous les cœurs 
let btnPlus = document.querySelectorAll(".fa-plus-circle"); // Tous les boutons "+"
let btnMinus = document.querySelectorAll(".fa-minus-circle"); // Tous les boutons "-"
let btnSupp = document.querySelectorAll(".fa-trash-alt"); // Tous les boutons poubelle 
let unitPrice = document.querySelectorAll(".unit-price"); // Les prix unitaires
let cards = document.getElementsByClassName("card-body"); // Les blocs produits

// Vérification dans la console
console.log(totalPrice);
console.log(heart);
console.log(btnPlus);
console.log(btnMinus);
console.log(btnSupp);
console.log(unitPrice);
console.log(cards);

// Gestion du bouton "J’aime"
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function () {
        // Si le cœur est déjà rouge, on le remet en noir
        if (this.style.color === "red") {
            this.style.color = "black";
        }
        // Sinon, on le colore en rouge
        else {
            this.style.color = "red";
        }
    });
}

// Gestion du bouton "+"
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", function () {
        // Récupère le span de la quantité
        let quantitySpan = this.parentNode.children[1];
        let quantity = parseInt(quantitySpan.innerHTML);

        // Incrémente la quantité
        quantity++;
        quantitySpan.innerHTML = quantity;

        // Met à jour le total après chaque clic
        updateTotal();
    });
}

// Gestion du bouton "-"
for (let i = 0; i < btnMinus.length; i++) {
    btnMinus[i].addEventListener("click", function () {
        // Récupère le span de la quantité
        let quantitySpan = this.parentNode.children[1];
        let quantity = parseInt(quantitySpan.innerHTML);

        // Décrémente la quantité uniquement si > 0
        if (quantity > 0) {
            quantity--;
            quantitySpan.innerHTML = quantity;
        }

        // Met à jour le total après chaque clic
        updateTotal();
    });
}

// Gestion du bouton "Supprimer"
for (let i = 0; i < btnSupp.length; i++) {
    btnSupp[i].addEventListener("click", function () {
        // Trouve et supprime tout le bloc du produit
        let cardBody = this.parentNode.parentNode.parentNode.parentNode;
        cardBody.remove();

        // Recalcule le total après suppression
        updateTotal();
    });
}

// Fonction pour calculer le prix total
function updateTotal() {
    let total = 0;
    let cards = document.getElementsByClassName("card");

    // Boucle sur tous les produits
    for (let i = 0; i < cards.length; i++) {
        // Récupère le prix unitaire (ex: "100 $")
        let priceText = cards[i].getElementsByClassName("unit-price")[0].innerHTML;
        let price = parseFloat(priceText);

        // Récupère la quantité affichée
        let quantityText = cards[i].getElementsByClassName("quantity")[0].innerHTML;
        let quantity = parseInt(quantityText);

        // Ajoute le total du produit au total général
        total += price * quantity;
    }

    // Affiche le total mis à jour dans la section correspondante
    totalPrice.innerHTML = total + " $";
}
