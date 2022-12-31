let alphaChar = /([a-z].*[A-Z])|([A-Z].*[a-z])/;
let digit = /\d/;
let specialChar = /.[!,@,$,%,^,&,*,_,-,=,+~,`,?,>,<,{,},(,)]/


let upperCase = document.getElementById('upperLetter')
let digits = document.getElementById('digit')
let specialChars = document.getElementById('specialChar');
let eightChars = document.getElementById('eightChar');
let ul = document.querySelector('ul');
let pass = document.getElementById('password');

pass.addEventListener('input', ()=>{
 ul.style.display = 'block'   
if(pass.value.match(alphaChar)){
    upperCase.style.color = 'green';
}
else{
    upperCase.style.color = 'red';
}

if(pass.value.match(digit)){
    digits.style.color = 'green';
}
else{
    digits.style.color = 'red';
}

if(pass.value.match(specialChar)){
    specialChars.style.color = 'green';
}
else{
    specialChars.style.color = 'red';
}
if(pass.value.length>7){
    eightChars.style.color = 'green';
}
else{
    eightChars.style.color = 'red';
}

//  varifyPass()
})


let visPass = document.getElementById('visPass');
let matched = document.getElementById('matched');
const form = document.querySelector("form");

        form.addEventListener('submit', function (e) {
            e.preventDefault();
    if(pass.value == visPass.value){
        matched.textContent = 'Password Confirmed';
        matched.style.color = 'blue';
    }
    else{
        matched.textContent = "Password didn't match";
        matched.style.color = 'red';
    }
});
