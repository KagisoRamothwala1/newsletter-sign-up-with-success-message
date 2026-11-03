let emailAddress = getElementById(".emailaddress");
let emaillAdressplacement = getElementById(".emailladressplacement");
const confirmationMessagecontainer = document.querySelector(".confirmationmessagecontainer");
const confirmationMessagebuttonclose = document.querySelector(".confirmationmessagebuttonclose");
var submitbutton = false

shareButton.addEventListener("click", function () {

    submitbutton = !submitbutton;
    if (submitbutton){
        console.log("button active")
        shareButton.classList.remove("sharebuttonbackground");
        shareContainer.classList.toggle("active")
        shareContainer.classList.remove("headcontainer");
        shareContainer.classList.add("socialLinkCtn");
    }
    else{
        console.log("button deactive")
        //shareContainer.classList.toggle("deactive");
         shareButton.classList.add("container");
        shareContainer.classList.add("headcontainer");
        shareContainer.classList.remove("confirmationMessagecontainer");
    }
    
    

});

confirmationmessagecontainer
emailladress
emailladressplacement
submitbutton
confirmationmessagecontainer
confirmationmessagebuttonclose