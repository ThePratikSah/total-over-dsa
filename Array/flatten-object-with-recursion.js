const objectToFlatten = {
  company: "deqode",
  estd: 2017,
  isPublic: false,
  user: {
    firstName: "Pratik",
    lastName: "Sah",
    age: 24,
    address: {
      home: {
        street: "Limbodi",
        city: "Indore",
        state: "MP",
      },
      work: {
        street: "Indrapuri",
        city: "Indore",
        state: "MP",
        officeLocations: {
          indore: true,
          banglore: false,
          pune: true,
        },
      },
    },
    skills: ["node", "react"],
  },
  printCompanyName: function () {
    return this.company;
  },
};

function flattenObject(objectToFlatten) {
  function helper(obj, parentKey) {
    let tempObj = {};
    for (let key in obj) {
      let tempKey = parentKey ? `${parentKey}.${key}` : key;
      if (Array.isArray(obj[key])) {
        tempObj[tempKey] = [...obj[key]];
      } else if (typeof obj[key] !== "object") {
        tempObj[tempKey] = obj[key];
      } else {
        let tempValue = helper(obj[key], tempKey);
        tempObj = { ...tempObj, ...tempValue };
      }
    }
    return tempObj;
  }

  return helper(objectToFlatten, "");
}

console.log(flattenObject(objectToFlatten));
