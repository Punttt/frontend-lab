const apiUrl = "https://backend-lab-53gq.onrender.com/api/workexperience";
import '../styles/main.scss'

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-work");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", async(e) => {
        e.preventDefault();

        // Skapar ett objekt för varje input
        const newItem = {
            companyname: document.getElementById("companyname").value.trim(),
            jobtitle: document.getElementById("jobtitle").value.trim(),
            location: document.getElementById("location").value.trim(),
            startdate: document.getElementById("startdate").value.trim(),
            enddate: document.getElementById("enddate").value.trim(),
            description: document.getElementById("description").value.trim()
        };

        if(
            !companyname ||
            !jobtitle ||
            !location ||
            !startdate ||
            !enddate ||
            !description
        ){
            errorMessage.textContent = "Alla fält måste fyllas i.";
            console.log("alla fält måste fyllas i.")
            return;
        }

        try {
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newItem)
            });

            if(!res) {
                console.error("Kunde inte spara posten");
                return;
            } 
            form.reset();

        } catch (error) {
            console.error("Fel vid POST:" + error);
        }
    });
});