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
    error: "Must contain a number followed by a single letter without spaces.",
  },
  flatNumber: {
    error:
      "Must contain a number optionally followed by a single letter without spaces or special characters.",
  },
  zip: {
    re: /^\d{2}-\d{3}$/,
    error: "Must follow the format XX-XXX.",
  },
  city: {
    re: /^[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(?:[\s\-][A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż]+)*$/,
    error: "Only letters, spaces, and hyphens are allowed.",
  },
  voivodeship: {
    error: "Please select a voivodeship from the list.",
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
houseNumber.addEventListener("input", (e) =>
  validateNumber(e, "HouseNumber", validator.homeNumber)
);
const flatNumber = document.querySelector(`input[name="flatNumber"]`);
flatNumber.addEventListener("input", (e) =>
  validateNumber(e, "FlatNumber", validator.flatNumber)
);
const zipCode = document.querySelector(`input[name="zip"]`);
zipCode.addEventListener("change", (e) =>
  validateInput(e, "ZipCode", validator.zip)
);
const city = document.querySelector(`input[name="city"]`);
city.addEventListener("change", (e) =>
  validateInput(e, "City", validator.city)
);
const voivodeship = document.querySelector(`select[name="voivodeship"]`);
voivodeship.addEventListener("change", (e) =>
  validateVoivodeship(e, "Voivodeship", validator.voivodeship)
);
const submit = document.querySelector(`input[type="submit"]`);

function validateZipCode(e) {
  console.log(this.value);
}

function validateInput(e, str, validator) {
  if (e.target.value.length === 0) {
    errors.push(`Invalid ${str}: Field is empty.`);
  } else if (!validator.re.test(e.target.value)) {
    errors.push(`Invalid ${str}: ${validator.error}`);
  }
  console.log(errors);
}

function validateNumber(e, str, validator) {
  if (e.target.value < 1) {
    e.target.value = "";
  }
  console.log(errors);
}

function validateVoivodeship(e, str, validator) {
  if (!e.target.value) {
    errors.push(`Invalid ${str}: ${validator.error}`);
  }
}
