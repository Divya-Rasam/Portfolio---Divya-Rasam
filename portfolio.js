
// theme_toggle = document.getElementById("themeToggle");
// theme_icon = document.getElementById("themeIcon");

// theme_toggle = document.getElementById("themeToggle").addEventListener("click", 
//     function change_theme () {
//         theme_icon.classList.toggle("bi-brightness-high");
//         theme_icon.classList.toggle("bi-moon");
//     })
// theme_icon = document.getElementById("themeIcon");

let theme_icon = document.getElementById("themeIcon");                              // defining before using it

let theme_toggle = document.getElementById("themeToggle");
theme_toggle.addEventListener("click", 
    function change_theme () {
        document.body.classList.toggle("light-theme");
        
        theme_icon.classList.toggle("bi-brightness-high");
        theme_icon.classList.toggle("bi-moon");
});








document.querySelector("form").addEventListener("submit", function (e) {
setTimeout(() => {
    this.reset();
}, 100); // slight delay so Formspree processes it before clearing
});

