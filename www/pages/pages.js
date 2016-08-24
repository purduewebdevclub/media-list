function toggle(id) {
    var element = document.getElementById(id);
    console.log(element);
    element.style.visibility = element.style.visibility === "hidden" ? "visible" : "hidden";
}
