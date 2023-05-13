const mapModal = document.querySelector(".modal-map")
const mapLink = document.querySelector(".map-link")
const mapClose = mapModal.querySelector(".modal-close")


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault()
    mapModal.classList.add("modal-show")
})

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault()
    mapModal.classList.remove("modal-show")
})

window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        if (mapModal.classList.contains("modal-show")) {
            mapModal.classList.remove("modal-show")
        }
    }
})
