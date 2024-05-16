// Function to display the pop-up
function showPopup() {
    var lastPopupTime = localStorage.getItem("lastPopupTime");
    if (!lastPopupTime || Date.now() - lastPopupTime > 20 * 60 * 1000) {
        document.getElementById("popup").style.display = "block";
    }
}

// Function to close the pop-up
function closePopup(isAnswer) {
    if (isAnswer) {
        alert("Thank you for registering. God bless you!");
    }
    document.getElementById("popup").style.display = "none";
    if (isAnswer) {
        localStorage.setItem("lastPopupTime", Date.now());
    }
}

// Function to handle sign-up
function signUp() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeOtp_N4SnDWvfmdl2AplFLFK920eiV-vRqvijrbqKLwAZJ-g/viewform", "_blank");
}

// Show the pop-up when the page loads
window.onload = function() {
    showPopup();
};
