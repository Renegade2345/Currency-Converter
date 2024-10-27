document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const outputTableBody = document.querySelector("#output tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        const currency = document.getElementById("currency").value;
        const quantity = parseFloat(document.getElementById("quantity").value);

        // Mock conversion rates
        const conversionRates = {
            INR: 0.012, // Example: 1 INR = 0.012 USD
            USD: 83.00, // Example: 1 USD = 83 INR
            EUR: 1.05   // Example: 1 EUR = 1.05 USD
        };

        // Clear previous output
        outputTableBody.innerHTML = "";

        // Calculate converted values
        const convertedValues = {};
        for (const [key, rate] of Object.entries(conversionRates)) {
            if (key !== currency) {
                convertedValues[key] = (quantity * rate).toFixed(2);
            }
        }

        // Populate the output table
        for (const [key, value] of Object.entries(convertedValues)) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${key}</td><td>${value}</td>`;
            outputTableBody.appendChild(row);
        }
});

});

