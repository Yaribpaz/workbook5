"use strict";

const peruvianFoods = [
  {
    name: "Ceviche",
    ingredients: ["fish", "lime", "red onion", "cilantro", "ají"],
    type: "Appetizer",
    origin: "Coastal",
  },
  {
    name: "Lomo Saltado",
    ingredients: ["beef", "onions", "tomatoes", "potatoes", "soy sauce"],
    type: "Main Dish",
    origin: "Andean",
  },
  {
    name: "Ají de Gallina",
    ingredients: ["chicken", "ají amarillo", "bread", "milk", "parmesan"],
    type: "Main Dish",
    origin: "Lima",
  },
  {
    name: "Anticuchos",
    ingredients: ["beef heart", "ají panca", "vinegar", "garlic", "potatoes"],
    type: "Street Food",
    origin: "Coastal/Andean",
  },
  {
    name: "Pachamanca",
    ingredients: ["pork", "chicken", "potatoes", "corn", "herbs"],
    type: "Traditional Feast",
    origin: "Andean Highlands",
  },
  { name: "Tacu Tacu", ingredients: ["rice", "beans", "onion", "garlic", "beef"], type: "Main Dish", origin: "Lima" },
  { name: "Chicharrón", ingredients: ["pork", "sweet potato", "red onion"], type: "Breakfast", origin: "Coastal" },
  {
    name: "Papa a la Huancaína",
    ingredients: ["potatoes", "ají amarillo", "cheese", "milk"],
    type: "Appetizer",
    origin: "Highlands",
  },
];

const peruvianFoodsTBody = document.querySelector("#peruvianFoodsTBody");
const typeFilter = document.querySelector("#typeFilter");

function buildTable(data, tableBody) {
  tableBody.innerHTML = "";

  data.forEach((food) => {
    let tr = tableBody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = food.name;

    let td2 = tr.insertCell();
    td2.innerText = food.ingredients.join(", ");

    let td3 = tr.insertCell();
    td3.innerText = food.type;

    let td4 = tr.insertCell();
    td4.innerText = food.origin;
  });
}

function populateDropdown(data, dropdown) {
  const types = [...new Set(data.map((food) => food.type))];
  dropdown.innerHTML = '<option value="All">All</option>';
  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    dropdown.appendChild(option);
  });
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//populateDropdown() takes:
//  data: the array of food items
//  dropdown: the <select> dropdown to add options to.
//types: list of all types of food by mapping through data and removing duplicates using Set.
//Adds an option for "All" types at the top.
//For each unique type, it creates an <option> element and appends it to the dropdown.
//--------------------------------------


function filterTable(data, tableBody, filter) {
  const filteredData = filter === "All" ? data : data.filter((food) => food.type === filter);
  buildTable(filteredData, tableBody);
}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//filterTable() takes:
//  data:the array of food items
//  tableBody: the <tbody> element for displaying for displaying filtered results.
//  filter: the selected filter type from the dropdown.
//filteredData: if "All" is selected, it shows all foods; otherwise, it filters food by the selected type.
//It calls buildTable() with the filtered data to display only matching rows.
//--------------------------------------

buildTable(peruvianFoods, peruvianFoodsTBody);
populateDropdown(peruvianFoods, typeFilter);


typeFilter.addEventListener("change", () => {
  filterTable(peruvianFoods, peruvianFoodsTBody, typeFilter.value);
});
