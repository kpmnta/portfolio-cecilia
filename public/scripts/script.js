function openAbout() {
    const show = document.getElementById("show");
    const box = document.getElementById("box");
    if (!show.classList.contains("-opened")) {
        show.classList.add("-opened")
        box.classList.add("-opened")
    } else {
        show.classList.remove("-opened")
        box.classList.remove("-opened")
    }
}