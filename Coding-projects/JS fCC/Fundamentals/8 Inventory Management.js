let inventory = [];

// takes the product name as its argument and returns the index of the corresponding product object inside the inventory array.
function findProductIndex(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

// Update current quantity
// If not, push it into the inventory
function addProduct(product) {
  let index = findProductIndex(product.name);
  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  } else {
    product.name = product.name.toLowerCase();
    inventory.push(product);
    console.log(`${product.name.toLowerCase()} added to inventory`);
  }
}
addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });

// Remove current quantity by a specific number amount
// if it reaches 0, remove the item from the invetory
function removeProduct(name, quantity) {
  const lowerCaseName = name.toLowerCase();
  let productObject = inventory[findProductIndex(name)];
  if (findProductIndex(name) !== -1) {
    if (quantity > productObject.quantity) {
      console.log(
        `Not enough ${lowerCaseName} available, remaining pieces: ${productObject.quantity}`,
      );
    } else if (quantity > 0) {
      productObject.quantity -= quantity;
      if (productObject.quantity <= 0) {
        inventory.splice(productObject, 1);
      } else {
        console.log(
          `Remaining ${lowerCaseName} pieces: ${productObject.quantity}`,
        );
      }
    }
  } else {
    console.log(`${lowerCaseName} not found`);
  }
  return inventory;
}

removeProduct("FLOUR", 5);
removeProduct("FLOuR", 5);
removeProduct("FLOuR", 5);
removeProduct("FLOuR", 5);
console.log(removeProduct("FLOuR", 10));
