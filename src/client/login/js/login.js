const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (isUserAdmin()) {
        userName = document.getElementById('userName').value;
        userMail = document.getElementById('userMail').value;
        window.location.href = "../../server/catalog/admin";
    }
});

function isUserAdmin() {
    var userName = document.getElementById('userName').value;
    return userName === "admin";
}