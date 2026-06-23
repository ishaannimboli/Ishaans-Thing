function validateInquiry() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mnumber = document.getElementById("mnumber").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    document.getElementById("fname-error").innerHTML = "";
    document.getElementById("lname-error").innerHTML = "";
    document.getElementById("mnumber-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("message-error").innerHTML = "";
    
    let isValid = true;
    
    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "Please fill in this field.";
        isValid = false;
    }
    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Please fill in this field.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("email-error").innerHTML = "Please fill in this field.";
        isValid = false;
    }
    if (message === "") {
        document.getElementById("message-error").innerHTML = "Please fill in this field.";
        isValid = false;
    }

    if (mnumber === "" || !/^\d{10}$/.test(mnumber)) {
        document.getElementById("mnumber-error").innerHTML = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }
    
    return isValid;
}

function submitInquiry() {
    let submitOutput = document.getElementById("submit-output");
    if (validateInquiry()) {
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll("input")[i].value = "";
            document.getElementsByClassName("input-error")[i].innerHTML = "";
        }
        document.querySelector("textarea").value = "";
        submitOutput.innerHTML = "Your inquiry has been submitted!";
        submitOutput.style.color = "black";
    }
    else {
        submitOutput.innerHTML = "One or more fields are incorrectly filled. Please fill in all fields correctly.";
        submitOutput.style.color = "red";
    }
}