document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const dob = document.getElementById("dob").value;
        const genderMale = document.getElementById("male").checked;
        const genderFemale = document.getElementById("female").checked;
        const genderOther = document.getElementById("other").checked;
        const terms = document.getElementById("terms").checked;

        // Validation
        if (name === "" || age === "" || dob === "") {
            alert("Please fill out all fields.");
            return;
        }

        if (!genderMale && !genderFemale && !genderOther) {
            alert("Please select a gender.");
            return;
        }

        if (!terms) {
            alert("You must agree to the Terms & Conditions.");
            return;
        }

        alert("Form submitted successfully!");
        form.submit(); // Submit the form if validation passes
    });
});
