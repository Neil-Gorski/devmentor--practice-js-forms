const postalCodeMap = {
  dolnośląskie: ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  "kujawsko-pomorskie": ["85", "86", "87", "88", "89"],
  lubelskie: ["20", "21", "22", "23", "24"],
  lubuskie: ["65", "66", "67", "68", "69"],
  łódzkie: ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
  małopolskie: ["30", "31", "32", "33", "34", "38"],
  mazowieckie: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
  opolskie: ["45", "46", "47", "48", "49"],
  podkarpackie: ["35", "36", "37", "38", "39"],
  podlaskie: ["15", "16", "17", "18", "19"],
  pomorskie: ["80", "81", "82", "83", "84"],
  śląskie: ["40", "41", "42", "43", "44"],
  świętokrzyskie: ["25", "26", "27", "28", "29"],
  "warmińsko-mazurskie": ["10", "11", "12", "13", "14"],
  wielkopolskie: ["60", "61", "62", "63", "64"],
  zachodniopomorskie: ["70", "71", "72", "73", "74"],
};
const validator = {
  name: {
    re: /^[A-Za-zÀ-ÖØ-öø-ÿĀ-žŻ-żĆ-ćĘ-ęŃ-ńÓ-óŚ-śŹ-źŻ-ż\s\-]+$/,
    error: "Only letters, spaces, and hyphens are allowed",
  },
  street: {
    re: /^(\d+\s)?[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(?:[\s\.\-]?[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż0-9]+)*$/,
    error: "Only letters, spaces, hyphens, and numbers are allowed.",
  },
  homeNumber: {
    re: /^\d+[A-Za-z]$/,
    error: "Must contain a number followed by a single letter without spaces.",
  },
  flatNumber: {
    re: /^\d+[A-Za-z]$/,
    error:
      "Must contain a number optionally followed by a single letter without spaces or special characters.",
  },
  zip: {
    re: /^\d{2}-\d{3}$/,
    error: "Invalid ZIP code: Must follow the format XX-XXX.",
  },
  city: {
    re: /^[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(?:[\s\-][A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż]+)*$/,
    error: "Invalid city: Only letters, spaces, and hyphens are allowed.",
  },
};
const errors = [];
const form = document.querySelector("form");
form.addEventListener("submit", (e) => e.preventDefault());
form.noValidate = true;

const firstName = document.querySelector(`input[name="firstName"]`);
firstName.addEventListener("change", (e) =>
  validateInput(e, "Firstname", validator.name)
);
const lastName = document.querySelector(`input[name="lastName"]`);
lastName.addEventListener("change", (e) =>
  validateInput(e, "Lastname", validator.name)
);
const street = document.querySelector(`input[name="street"]`);
street.addEventListener("change", (e) =>
  validateInput(e, "Street", validator.street)
);
const houseNumber = document.querySelector(`input[name="houseNumber"]`);
houseNumber.addEventListener("change", (e) =>
  validateInput(e, "HouseNumber", validator.homeNumber)
);
const flatNumber = document.querySelector(`input[name="flatNumber"]`);
flatNumber.addEventListener("change", (e) =>
  validateFlatNumber(e, "FlatNumber", validator.homeNumber)
);
const zipCode = document.querySelector(`input[name="zip"]`);
zipCode.addEventListener("input", validateZipCode);
const city = document.querySelector(`input[name="city"]`);
const voivodeship = document.querySelector(`input[name="voivodeship"]`);
const submit = document.querySelector(`input[type="submit"]`);

function validateZipCode(e) {
  console.log(this.value);
}

function validateInput(e, str, validator) {
  if (e.target.value.length === 0) {
    errors.push(`Invalid ${str}: Field is empty.`);
  } else if (!validator.name.test(e.target.value)) {
    errors.push(`Invalid ${str}: ${validator.error}`);
  }
  console.log(errors);
}

function validateFlatNumber(e, str, validator) {
  if (e.target.value.length === 0) {
    errors.push(`Invalid ${str}: Field is empty.`);
  } else if (!validator.name.test(e.target.value)) {
    errors.push(`Invalid ${str}: ${validator.error}`);
  }
  console.log(errors);
}
