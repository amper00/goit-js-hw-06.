
// 1 a//


const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);

//1 b//
categoriesList.forEach((category) => {
const categoryName = category.querySelector("h2").textContent;
const elementsCount = category.querySelectorAll("ul li").length;
console.log(`Category ${categoryName}`);
console.log(`Elements ${elementsCount}`);

});