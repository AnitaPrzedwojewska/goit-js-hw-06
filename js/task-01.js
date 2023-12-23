console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach((item) =>
  console.log(
    `Category: ${item.querySelector("h2").textContent}\nElements: ${
      item.querySelectorAll("li").length
    }`
  )
);