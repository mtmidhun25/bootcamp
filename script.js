function toggleMenu() {
    document.getElementById("navLinks")
            .classList.toggle("show");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event){

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    alert(
        "Form Submitted!\n\n" +
        "Name: " + name +
        "\nEmail: " + email
    );

});