const submitbutton = document.querySelector("button");
const confirmationmessagecontainer = document.getElementById("confirmationmessagecontainer");
const form = document.getElementById("newsletterform");
const confirmationmessagebuttonclose = document.getElementById("confirmationmessagebuttonclose");

// Hide confirmation container initially
confirmationmessagecontainer.style.display = "none";

// When the form is submitted
emailaddress.addEventListener("submit", function(event) {

    event.preventDefault();

    // Display confirmation container
    confirmationmessagecontainer.style.display = "block";

    // Hide the form
    form.style.display = "none";

});

confirmationmessagebuttonclose.addEventListener("click", function() {

    confirmationmessagecontainer.style.display = "none";

    form.style.display = "block";

});

// remove the error while typing
emailaddress.addEventlistener("input", fuction () {

    emailaddress.classlist.remove("error");
    errorMessage.classlist.remove("active");

});

//dismiss successful popup
confirmationmessagebuttonclose.addEventlistener("click", fuction(){
    confirmationmessagecontainer.classlist.remove("active");

     // Show the form again
    form.classList.remove("hidden");

    // Clear the input
    emailladressplacement.value = "";
})

//confirmationmessagecontainer
//emailladress
//emailladressplacement
//submitbutton
//confirmationmessagecontainer
//confirmationmessagebuttonclose