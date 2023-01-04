let alphaChar = /([a-z].*[A-Z])|([A-Z].*[a-z])/;
let digit = /\d/;
let specialChar = /.[!,@,$,%,^,&,*,_,-,=,+~,`,?,>,<,{,},(,)]/;

let upperCase = document.getElementById("upperLetter");
let digits = document.getElementById("digit");
let specialChars = document.getElementById("specialChar");
let eightChars = document.getElementById("eightChar");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let submit = document.getElementById('submit');
let pass = document.getElementById("password");

pass.addEventListener("input", validation);

function validation() {
  ul.style.display = "block";
  if (pass.value.match(alphaChar)) {
    upperCase.style.color = "green";
  } else {
    upperCase.style.color = "red";
  }

  if (pass.value.match(digit)) {
    digits.style.color = "green";
  } else {
    digits.style.color = "red";
  }

  if (pass.value.match(specialChar)) {
    specialChars.style.color = "green";
  } else {
    specialChars.style.color = "red";
  }
  if (pass.value.length > 7) {
    eightChars.style.color = "green";
  } else {
    eightChars.style.color = "red";
  }


  // validation();
  for (item of li) {
    if (item.style.color == "red") {
      matched.textContent = "Fill the Validation Criteria";
      matched.style.color = "red";
      submit.disabled = true
      console.log(item)
    } else {
      console.log("good");
      matched.textContent = "Validation Criteria Full Filled";
      matched.style.color = "blue";
      submit.disabled = false
    }
  }
}

let visPass = document.getElementById("visPass");
let matched = document.getElementById("matched");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
  
  if(pass.value === visPass.value) {
    matched.textContent = "Password Confirmed";
    matched.style.color = "blue";
    ul.style.display = "none";
    pass.value = "";
    visPass.value = "";
  } 
  else{
    validation();
    matched.textContent = "Password didn't match";
    matched.style.color = "red";
  }
  
});



