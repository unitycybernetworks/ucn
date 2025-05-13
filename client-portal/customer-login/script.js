document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulated credentials (replace with server-side validation)
    const adminCredentials = { username: "admin", password: "admin123" };
    const customerCredentials = { username: "customer", password: "cust123" };

    if (username === adminCredentials.username && password === adminCredentials.password) {
        window.location.href = "admin_portal.html";  // Redirect to admin portal
    } else if (username === customerCredentials.username && password === customerCredentials.password) {
        window.location.href = "../dashboard";  // Redirect to customer portal
    } else {
        alert("Incorrect Username or Password. please try again! if you have forgotten your Username or Password please contact your MSP!");
    }
});
