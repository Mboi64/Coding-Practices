const normalizeUnits = (manifest) => {
  let newManifest = { ...manifest }; // This is a rest parameter, It doesn't delete the original property, but creates a new object without specific properties (this makes a new copy of the original object)
  if (manifest.unit == "lb") {
    newManifest.weight = manifest.weight * 0.45;
    newManifest.unit = "kg";
  } else {
    newManifest;
  }
  return newManifest;
};

const validateManifest = (manifest) => {
  let newManifest = {}; // Unlike the first one, this creates an empty object without copying the parameter

  // checks for containerId propertu value
  if (manifest.containerId === undefined) {
    newManifest.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    Number.isInteger(manifest.containerId) === false ||
    manifest.containerId <= 0
  ) {
    newManifest.containerId = "Invalid";
  }

  // checks for destination property value
  if (manifest.destination === undefined) {
    newManifest.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    newManifest.destination = "Invalid";
  }

  // checks for weight property value
  if (manifest.weight === undefined) {
    newManifest.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    newManifest.weight = "Invalid";
  }

  // checks for unit property value
  if (manifest.unit === undefined) {
    newManifest.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    newManifest.unit = "Invalid";
  }

  // checks for hazmat property value
  if (manifest.hazmat === undefined) {
    newManifest.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    newManifest.hazmat = "Invalid";
  }

  return newManifest;
};

const processManifest = (manifest) => {
  let heavy = normalizeUnits(manifest);
  let id = validateManifest(manifest);
  if (Object.keys(validateManifest(manifest)).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${heavy.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
  return "";
};

console.log(
  processManifest({
    containerId: 55,
    destination: "Carmel",
    weight: 400,
    unit: "lb",
    hazmat: false,
  }),
);
