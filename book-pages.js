// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages

function pageRequirements(book1, book2, book3) {
    const book1page = book1 * 100;
    const book2page = book2 * 200;
    const book3page = book3 * 300;
    const pageRequirement = book1page + book2page + book3page;
    return pageRequirement
    
}
const allBookRequirement = pageRequirements(2, 4, 2);
console.log(allBookRequirement);