function sortFruit() {
    fruitData.sort((a, b) => a.name.localeCompare(b.name));
    displayFruitData(fruitData);
}

function displayFruitData(fruitData) {
    const fruitTableBody = document.getElementById("fruitTableBody");
    fruitTableBody.innerHTML = "";

    fruitData.forEach(fruit => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><b>${fruit.name}</b></td>
            <td>$${fruit.price}</td>
            <td>${fruit.description}</td>
        `;
        fruitTableBody.appendChild(row);
    });
}

displayFruitData(fruitData);
