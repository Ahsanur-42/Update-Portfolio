document.addEventListener("DOMContentLoaded", function () {
    const detailsButtons = document.querySelectorAll(".details-btn");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");
    const detailsText = document.querySelector(".details-text");

    // Open popup logic
    detailsButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const details = button.getAttribute("data-details");
            detailsText.textContent = details;
            popup.style.display = "flex"; // Show the popup
        });
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event bubbling
        popup.style.display = "none"; // Hide the popup
    });

    
});