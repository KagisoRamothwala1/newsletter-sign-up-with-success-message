
const submitbutton = document.querySelector("button");
const confirmationmessagecontainer = document.getElementById("confirmationmessagecontainer");
const form = document.getElementById("newsletterform");
const emailaddress = document.getElementById("emailaddress");
const confirmationmessagebuttonclose = document.getElementById("confirmationmessagebuttonclose");


// Hide confirmation container initially
confirmationmessagecontainer.style.display = "none";

// When the form is submitted


confirmationmessagebuttonclose.addEventListener("click", function() {

    confirmationmessagecontainer.style.display = "none";

    form.style.display = "block";

});

// remove the error while typing
emailaddress.addEventListener("input", function () {

    emailaddress.classList.remove("error");
    confirmationmessagecontainer.classList.remove("active");

});

function submit (){
 
    confirmationmessagecontainer.style.display = "flex";

    form.style.display = "block";

    var input = emailaddress.value;
    console.log(input + " is the input value");

    emailaddressplacement.textContent = input;
    
}

//dismiss successful popup
confirmationmessagebuttonclose.addEventListener("click", function(){
    confirmationmessagecontainer.classList.remove("active");

     // Show the form again
    form.classList.remove("hidden");

    // Clear the input
    emailaddressplacement.value = "";
})

//confirmationmessagecontainer
//emailaddress
//emailaddressplacement
//submitbutton
//confirmationmessagecontainer
//confirmationmessagebuttonclose