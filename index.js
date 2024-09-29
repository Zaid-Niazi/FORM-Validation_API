const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipCodeInput = document.querySelector("#zipCode");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

const spanEmail = document.getElementById("spanemail");
const spanZip = document.getElementById("spanzip");
const spanConformpass = document.getElementById("spanconfirmpassword");
const submitButton = document.querySelector(".submit");

function checkInput() {
  const regExp = [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/];
  if (emailInput.value !== "") {
    if (regExp[0].test(emailInput.value)) {
      emailInput.setCustomValidity("");
      spanEmail.textContent = "";
    } else {
      emailInput.setCustomValidity("Please Provide A Valid Email");
      spanEmail.textContent = "Please Provide A Valid Email";
    }
  } else {
    emailInput.setCustomValidity("INVALID");

    spanEmail.textContent = "";
  }
}

function checkZipCode() {
  const regExp = [
    /^\d{5}(?:-\d{4})?$/,

    /^([A-Z]{1,2}\d{1,2}[A-Z]?) ?\d[A-Z]{2}$/,

    /^\d{5}$/,

    /^\d{2}\d{3}$/,
  ];

  if (zipCodeInput.value !== "") {
    zipSwitch(regExp);
  } else {
    zipCodeInput.setCustomValidity("INVALID");

    spanZip.textContent = "";
  }
}

function zipSwitch(regExp) {
  switch (countryInput.value) {
    case "United States":
      if (regExp[0].test(zipCodeInput.value)) {
        zipCodeInput.setCustomValidity("");
        spanZip.textContent = "";
      } else {
        spanZip.textContent = "Please Provide A Valid Zip Code";
      }
      break;
    case "UK":
      if (regExp[1].test(zipCodeInput.value)) {
        zipCodeInput.setCustomValidity("");
        spanZip.textContent = "";
      } else {
        spanZip.textContent = "Please Provide A Valid Zip Code";
      }
      break;
    case "Germany":
      if (regExp[2].test(zipCodeInput.value)) {
        zipCodeInput.setCustomValidity("");
        spanZip.textContent = "";
      } else {
        spanZip.textContent = "Please Provide A Valid Zip Code";
      }
      break;
    case "France":
      if (regExp[3].test(zipCodeInput.value)) {
        zipCodeInput.setCustomValidity("");
        spanZip.textContent = "";
      } else {
        spanZip.textContent = "Please Provide A Valid Zip Code";
      }
      break;
  }
}

function checkPassword() {
  if (confirmPasswordInput.value !== "") {
    if (passwordInput.value === confirmPasswordInput.value) {
      passwordInput.setCustomValidity("");
      confirmPasswordInput.setCustomValidity("");
      spanConformpass.textContent = "";
    } else {
      confirmPasswordInput.setCustomValidity("Passwords do not match");
      spanConformpass.textContent = "Passwords do not match";
    }
  } else {
    confirmPasswordInput.setCustomValidity("Please Renter Your Password");
    passwordInput.setCustomValidity("Please Renter Your Password");
    spanConformpass.textContent = "Please Renter Your Password";
  }
}

function submit(e) {
  e.preventDefault();
  checkZipCode();
  checkInput();
  checkPassword();
  if (
    emailInput.checkValidity() === true &&
    zipCodeInput.checkValidity() === true &&
    confirmPasswordInput.checkValidity() === true
  ) {
    alert("Form Submitted");
    emailInput.value = "";
    zipCodeInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  }

  console.log(confirmPasswordInput.checkValidity());
}

emailInput.addEventListener("input", checkInput);
zipCodeInput.addEventListener("input", checkZipCode);
confirmPasswordInput.addEventListener("input", checkPassword);

submitButton.addEventListener("click", submit);
