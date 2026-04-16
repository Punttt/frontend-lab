const apiUrl = "";

async function loadData() {
    const res = await fetch(apiUrl);
    const data = await res.json();

    const container = document.getElementById("list");
}