function openAbout() {
    const show = document.getElementById("show");
    const box = document.getElementById("box");
    if (show.style.display === "none") {
        show.style.display = "block";
        box.style.height = "585px";
    } else {
        show.style.display = "none";
        box.style.height = "520px";
    }
}