

window.onload = () => {
    const buttons = document.querySelectorAll('.add-to-cart');

    for (const button of buttons) {
        // e : événement déclenché
        button.onclick = (monEvent) => {

            // Récupération de la ligne selectionnée
            const productRow = monEvent.target.parentNode.parentNode;

            // console.dir(productRow.children[0].innerText) // produit
            // console.dir(productRow.children[1].innerText) // prix
            // console.log(productRow.children[2].children[0].value) // quantité

            // Création d'un objet avec les valeurs d'un produit
            const newProduct = {
                productName: productRow.children[0].innerText,
                productPrice: productRow.children[1].innerText,
                productQuantity: productRow.children[2].children[0].value
            };

            addToCart(newProduct);
        };
    }
};

function addToCart (product) {

    const cart = document.getElementById('panier');

    // Vérifier si le produit est déjà dans le panier
    const productsCart = cart.children;
    let productFound = false;

    for (const productCart of productsCart) {
        const name = productCart.children[0].innerText;
        const price = productCart.children[1].innerText;
        const quantity = productCart.children[2];

        if (name === product.productName && price === product.productPrice) {
            quantity.children[0].value = +quantity.children[0].value + +product.productQuantity;
            productFound = true;
        }
    }
    if (!productFound) {
        // Création des éléments HTML du produit
        const productRow = document.createElement('tr');
        const productName = document.createElement('td');
        const productPrice = document.createElement('td');
        const productQuantity = document.createElement('td');
        const productQuantityInput = document.createElement('input')
        const productRemove = document.createElement('td');
        const productRemoveBtn = document.createElement('button');

        // Ajouter les éléments HTML à leur parent
        cart.appendChild(productRow);
        productRow.appendChild(productName);
        productRow.appendChild(productPrice);
        productRow.appendChild(productQuantity);
        productQuantity.appendChild(productQuantityInput)
        productRow.appendChild(productRemove);
        productRemove.appendChild(productRemoveBtn);

        // Paramétrer les éléments HTML
        productName.innerText = product.productName;
        productPrice.innerText = product.productPrice;
        productQuantityInput.setAttribute("type", "number")
        productQuantityInput.setAttribute("min", "0")
        productQuantityInput.value = product.productQuantity
        productRemoveBtn.innerText = "❌";
    }

}