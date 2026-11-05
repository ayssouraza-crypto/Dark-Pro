
document.addEventListener("DOMContentLoaded", function() {
    const bu = document.getElementById("bu");
    const message = document.getElementById("message");

    bu.addEventListener("click", function() {
        message.textContent = "LET'S GO ➡️";
    });
});