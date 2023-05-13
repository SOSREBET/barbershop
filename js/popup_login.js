const loginModal = document.querySelector(".modal-login")
const loginForm = loginModal.querySelector(".login-form")
const loginLink = document.querySelector(".login-link")
const loginClose = loginModal.querySelector(".modal-close")

let localStorageSupport = true
let login = ""

try {
    login = localStorage.getItem("login")
} catch (error) {
    localStorageSupport = false
}

loginLink.addEventListener("click", function (evt) {
    evt.preventDefault()
    loginModal.classList.remove("modal-hide")
    loginModal.classList.add("modal-show")
    loginModal.offsetWidth = loginModal.offsetWidth
    if (login) {
        loginForm.login.value = login
        loginForm.password.focus()
    } else {
        loginForm.login.focus()
    }
})

loginForm.addEventListener("submit", function (evt) {
    if (!loginForm.login.value || !loginForm.password.value) {
        evt.preventDefault()
        loginModal.classList.remove("modal-error")
        loginModal.offsetWidth = loginModal.offsetWidth
        loginModal.classList.add("modal-error")
    } else {
        if (localStorageSupport) {
            localStorage.setItem("login", loginForm.login.value)
        }
    }
})

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault()
    loginModal.classList.add("modal-hide")
    setTimeout(() => {
        loginModal.classList.remove("modal-show")
    }, 550);
    loginModal.classList.remove("modal-error")
})

window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        if (loginModal.classList.contains("modal-show")) {
            loginModal.classList.add("modal-hide")
            setTimeout(() => {
                loginModal.classList.remove("modal-show")
            }, 550);
            loginModal.classList.remove("modal-error")
        }
    }
})
