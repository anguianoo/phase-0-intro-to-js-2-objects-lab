// Once you've initialized the employee Object, you'll need to create the following four functions:

// updateEmployeeWithKeyAndValue(): this function should take in three arguments: a employee Object, a key and a value.
// This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!

// destructivelyUpdateEmployeeWithKeyAndValue():
// this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.

// deleteFromEmployeeByKey():
// this function should take in a employee Object and a key. It should delete the property with that key from the employee Object.
// This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!

// destructivelyDeleteFromEmployeeByKey():
// this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.

// Write your solution in this file!
const employee = {
  name: "james",
  streetAddress: "123 Bond st",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };

  newEmployee[key] = value;

  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];

  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// EXAMPLES:

// DESTRUCTIVE

// function destructivelyUpdateObject(obj, key, value) {
//     obj[key] = value; //Why are we using bracket notation here?

//     return obj;
//   }

// NON-DESTRUCTIVE

// function nondestructivelyUpdateObject(obj, key, value) {
//     const newObj = { ...obj };

//     newObj[key] = value;

//     return newObj;
//   }

// REMOVE A PROPERTY

// const wednesdayMenu = {
//     cheesePlate: {
//       soft: "Brie",
//       semiSoft: "Fontina",
//       hard: "Provolone",
//     },
//     fries: "Sweet potato",
//     salad: "Southwestern",
//   };

//   delete wednesdayMenu.salad;
