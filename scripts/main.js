// toggle and responsive navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navbar = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navbar.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();


// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
};