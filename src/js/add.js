const apiUrl = "http://localhost:3000/api/workexperience";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-work");

    form.addEventListener("submit", async(e) => {
        e.preventDefault();

        // Skapar ett objekt för varje input
        const newItem = {
            companyname: document.getElementById("companyname").value,
            jobtitle: document.getElementById("jobtitle").value,
            location: document.getElementById("location"). value,
            startdate: document.getElementById("startdate").value,
            enddate: document.getElementById("enddate").value,
            description: document.getElementById("description").value
        };

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

            alert("Post sparad!");
            form.reset();

        } catch (error) {
            console.error("Fel vid POST:" + error);
        }
    });
});