let popup = document.getElementById("popup");
let shareBtn = document.getElementById("share-btn");

const togglePopup = (state) => popup.classList.toggle("is-visible", state);

shareBtn.addEventListener("mouseenter", () => togglePopup(true));
shareBtn.addEventListener("mouseleave", () => togglePopup(false));
shareBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    popup.classList.toggle("is-visible");
});
document.addEventListener("click", () => togglePopup(false));