const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const passwordError = document.getElementById("p-error")
const passwordInput1 = document.getElementById("password1");
const passwordInput2 = document.getElementById("password2");


form.addEventListener("submit", (e) => {
    if (password1.value !== password2.value) {
        passwordError.innerText = "*Passwords do not match";
        e.preventDefault();
        passwordInput1.classList.add("error");
        passwordInput2.classList.add("error");
    }
})

passwordInput1.addEventListener("focus", (e) => {
    passwordInput1.classList.remove("error")
    passwordInput2.classList.remove("error")
    passwordError.innerText = "";
});

passwordInput2.addEventListener("focus", (e) => {
    passwordInput1.classList.remove("error")
    passwordInput2.classList.remove("error")
    passwordError.innerText = "";
});