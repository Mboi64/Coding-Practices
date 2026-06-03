// Simulate receiving a shipment of pantry items, deciding what to do with each item, and organizing the results for storage

const rawData = [
  "A10|Tomatoes|5|2027-01-01", // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry", // zone: "pantry"
];

// Takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties
const parseShipment = (rawData) => {
  let result = [];
  let duplicateSku = [];
  for (let i = 0; i < rawData.length; i++) {
    let currentData = rawData[i].split("|");
    // I was not completely familar with deconstructing arrays like this, but I want to try and apply these in future projects/labs
    let [sku, name, qty, expires, zone] = currentData;
    let obj = {
      sku: sku,
      name: name,
      qty: parseInt(qty),
      expires: expires,
      zone: zone || "general",
    };
    if (!duplicateSku.includes(sku)) {
      duplicateSku.push(sku);
      result.push(obj);
    }
  }
  return result;
};

console.log(parseShipment(rawData))

/*
Compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item } where:
    - type is one of "restock", "discard", or "donate"
    - item is the parsed shipment object
*/
const planRestock = (pantry, shipment) => {
  let result = [];
  let upcomingShipment = parseShipment(shipment);
  let currentInventory = parseShipment(pantry);

  for (const ship of upcomingShipment) {
    if (ship.qty <= 0) {
      result.push({
        type: "discard",
        item: {
          sku: ship.sku,
          name: ship.name,
          qty: ship.qty,
          expires: ship.expires,
          zone: ship.zone || "general",
        },
      });
      break;
    }

    for (const pan of currentInventory)
      if (pan.sku.includes(ship.sku)) {
        result.push({
          type: "restock",
          item: {
            sku: ship.sku,
            name: ship.name,
            qty: ship.qty,
            expires: ship.expires,
            zone: ship.zone || "general",
          },
        });
        break;
      } else {
        result.push({
          type: "donate",
          item: {
            sku: ship.sku,
            name: ship.name,
            qty: ship.qty,
            expires: ship.expires,
            zone: ship.zone || "general",
          },
        });
      }
  }

  return result;
};

// Groups the actions into storage zones based on each item’s zone property
const groupByZone = (actions) => {
  let result = {}
  for (const type of actions){
    let property = type.item.zone
    if (!result[property]){
      result[property] = []
    }

    result[property].push(type)
  }
  return result
}

const clonePantry = (pantry) => {
  // structuredClone(pantry) is a similar and more modern way to deepCopy an object
  return JSON.parse(JSON.stringify(pantry))
}

// This lab was really confusing and overly complicated