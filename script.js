// Enhanced functionality for search
function searchProperties() {
    const query = document.getElementById("searchInput").value.trim();
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (query) {
        // Simulate search logic (replace with actual search implementation)
        const sampleResults = [
            `Property in ${query} - 3 Bed, 2 Bath`,
            `Property in ${query} - 4 Bed, 3 Bath`,
            `Luxury Apartment in ${query}`
        ];

        resultsContainer.innerHTML = sampleResults
            .map(result => `<div class="result-item">${result}</div>`)
            .join("");
    } else {
        resultsContainer.innerHTML = "<p class='error'>Please enter a search term.</p>";
    }
}

// Enhanced contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedbackContainer = document.getElementById("feedbackContainer");

    // Clear previous feedback
    feedbackContainer.innerHTML = "";

    // Validate form fields
    if (!name || !email || !message) {
        feedbackContainer.innerHTML = "<p class='error'>All fields are required.</p>";
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        feedbackContainer.innerHTML = "<p class='error'>Please enter a valid email address.</p>";
        return;
    }

    // Simulate form submission
    feedbackContainer.innerHTML = "<p class='success'>Thank you for your message. We'll get back to you soon!</p>";

    // Clear form fields (optional)
    e.target.reset();
});
