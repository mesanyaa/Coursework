let carts = document.querySelectorAll(".add-cart");

let products = [
  // product 1
  {
    name: "Summer LilacBush",
    tag: "summerlilacbush",
    price: 4999,
    inCart: 0,
  },
  // product 2
  {
    name: "The courage of a gentleman",
    tag: "thecourageofagentleman",
    price: 4999,
    inCart: 0,
  },
  // product 3
  {
    name: "Magic of the East",
    tag: "magicoftheeast",
    price: 4999,
    inCart: 0,
  },
  // product 4
  {
    name: "Spring Inspiration",
    tag: "springinspiration",
    price: 4999,
    inCart: 0,
  },
  // product 5
  {
    name: "Fruit Harmony",
    tag: "fruitharmony",
    price: 4999,
    inCart: 0,
  },
  // product 6
  {
    name: "Wood Energy",
    tag: "wood energy",
    price: 4999,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    let titleValue = document.title;
    // console.log(typeof titleValue);
    switch (titleValue) {
      case "Летняя сирень":
        cartNumbers(products[0]);
        totalCost(products[0]);
        break;
      case "Мужество джентельмена":
        cartNumbers(products[1]);
        totalCost(products[1]);
        break;
      case "Магия Востока":
        cartNumbers(products[2]);
        totalCost(products[2]);
        break;
      case "Весеннее вдохновение":
        cartNumbers(products[3]);
        totalCost(products[3]);
        break;
      case "Фруктовая гармония":
        cartNumbers(products[4]);
        totalCost(products[4]);
        break;
      case "Древесная энергия":
        cartNumbers(products[5]);
        totalCost(products[5]);
        break;
    }
  });
}

/* function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
} */

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    // document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    // document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;

    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

/* onLoadCartNumbers(); */
