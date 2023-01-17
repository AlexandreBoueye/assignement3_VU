const form = document.getElementById("contact-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Make an HTTP request to the server to submit the form
    fetch("submit-form.php", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => response.text())
        .then(data => {
            // Display a message to the user
            alert(data);
        })
        .catch(error => {
            console.error("Error:",
