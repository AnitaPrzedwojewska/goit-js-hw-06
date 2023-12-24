const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");
const listNodes = [];
for (let i = 0; i < ingredients.length; i++) {
  listNodes[i] = document.createElement("li");
  listNodes[i].classList.add("item");
  listNodes[i].textContent = ingredients[i];
}
// console.log(listNodes);
// const listNodes = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(listNodes);
// listNodes.forEach((node) => listIngredients.append(node));

listIngredients.append(...listNodes);