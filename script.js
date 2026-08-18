const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

function checkMatch() {
    const pw = password.value;
    const pw2 = confirmPassword.value;

    if (pw.length >= 8) {
        password.style.border = "2px solid green";
        password.setCustomValidity("");
    } else {
        password.style.border = "2px solid red";
        password.setCustomValidity("Password must be at least 8 characters.");
    }

    if (pw === pw2 && pw2.length > 0) {
        confirmPassword.style.border = "2px solid green";
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.style.border = "2px solid red";
        confirmPassword.setCustomValidity("Passwords do not match.");
    }
}

password.addEventListener("input", checkMatch);
confirmPassword.addEventListener("input", checkMatch);