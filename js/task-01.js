const categoriesItems = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesItems.children.length}`);

let category = categoriesItems.firstElementChild;
while (category !== null) {
  console.log(
`Category: ${category.children[0].textContent}
Elements: ${category.children[1].children.length}`
  );
  category = category.nextElementSibling;
}

// const categoriesItems = document
//   .querySelector("#categories")
//   .querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesItems.length}`);
// categoriesItems.forEach((item) =>
//   console.log(
//     `Category: ${item.querySelector("h2").textContent}\nElements: ${
//       item.querySelectorAll("li").length
//     }`
//   )
// );