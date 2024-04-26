function generatePassword() {
    const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
    const len = 16
    let password = ""
    for (let i = 0; i < len; i++) {
        const randomNumber = Math.floor(Math.random() * value.length)
        password += value.charAt(randomNumber)
    }
    document.getElementById("passwordInput").value = password;
    document.getElementById("generatePasswordBtn").disabled = true;
}

function checkEmailInput() {
    const emailInput = document.getElementById("validationCustom03");
    const generatePasswordBtn = document.getElementById("generatePasswordBtn");
    if (emailInput.value.trim() !== "") { 
        generatePasswordBtn.disabled = false; 
    } else {
        generatePasswordBtn.disabled = true; 
    }
}
