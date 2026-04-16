const apiUrl = "http://localhost:3000/api/workexperience";

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});

async function loadData() {
    const res = await fetch(apiUrl);
    const data = await res.json();

    // Hämtar list-elementet och nollar innehåll
    const container = document.getElementById("list");
    container.innerHTML = "";

    // Loopar igenom innehåll.
    data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <h3>${item.companyname}</h3>
            <p>${item.jobtitle} - ${item.location}</p>
            <p>${item.startdate} - ${item.enddate}</p>
            <p>${item.description}</p>
            <button class="delete-btn" data-id="${item.id}">Delete</button>
        `;

        container.appendChild(div);
    });

    // Event-lyssnare på delete-knappen
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", ()=>{
            const id = btn.dataset.id;
            deleteItem(id);
        });
    });
}
