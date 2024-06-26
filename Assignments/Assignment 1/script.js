const fruitData = [
    {
        "id": 1,
        "name": "Apple",
        "category": "Fruits",
        "price": 0.5,
        "inStock": true,
        "description": "A crisp, sweet red apple.",
        "nutrition": {
            "calories": 52,
            "fat": 0.2,
            "carbohydrates": 14,
            "protein": 0.3
        }
    },
    {
        "id": 2,
        "name": "Banana",
        "category": "Fruits",
        "price": 0.3,
        "inStock": true,
        "description": "A ripe, yellow banana.",
        "nutrition": {
            "calories": 89,
            "fat": 0.3,
            "carbohydrates": 23,
            "protein": 1.1
        }
    },
    {
        "id": 3,
        "name": "Carrot",
        "category": "Vegetables",
        "price": 0.2,
        "inStock": true,
        "description": "A fresh, crunchy carrot.",
        "nutrition": {
            "calories": 41,
            "fat": 0.2,
            "carbohydrates": 10,
            "protein": 0.9
        }
    },
    {
        "id": 4,
        "name": "Bread",
        "category": "Bakery",
        "price": 2.5,
        "inStock": true,
        "description": "A loaf of freshly baked bread.",
        "nutrition": {
            "calories": 265,
            "fat": 3.2,
            "carbohydrates": 49,
            "protein": 9
        }
    }
];

function sortFruit() {
    for (let i = 0; i < fruitData.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < fruitData.length; j++) {
            if (fruitData[j].name < fruitData[minIndex].name) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = fruitData[i];
            fruitData[i] = fruitData[minIndex];
            fruitData[minIndex] = temp;
        }
    }
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
