const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    document.getElementById("user-name").textContent = currentUser.username;
    document.getElementById("account-name").textContent = currentUser.username;
    document.getElementById("last-login").textContent = currentUser.lastLogin;
} else {
    alert("You need to log in first!");
    window.location.href = "https://unitycybernetworks.github.io/unitycybernetworks/client-portal/customer-login";
}

// Logout Button Functionality
document.getElementById("logout-btn").addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    alert("You have been logged out.");
    window.location.href = "https://unitycybernetworks.github.io/unitycybernetworks/client-portal/customer-login";
});

// Prevent navigation back after logout
window.onpopstate = function () {
    if (!localStorage.getItem("currentUser")) {
        window.location.href = "https://unitycybernetworks.github.io/unitycybernetworks/client-portal/customer-login";
    }
};

// Session Timeout After 30 Minutes
let sessionTimeout;

function resetSessionTimeout() {
    clearTimeout(sessionTimeout);
    sessionTimeout = setTimeout(() => {
        localStorage.removeItem("currentUser");
        alert("Session expired due to inactivity. You have been logged out.");
        window.location.href = "https://unitycybernetworks.github.io/unitycybernetworks/client-portal/customer-login";
    }, 30 * 60 * 1000); // 30 minutes in milliseconds
}

// Reset the session timeout on user interaction
document.body.addEventListener("mousemove", resetSessionTimeout);
document.body.addEventListener("keydown", resetSessionTimeout);

// Initialize the session timeout when the page loads
resetSessionTimeout();
