/**
 * set subcategories name in data attributes name
 * 
 */

const setSubcategoriesName = () => {
    let productsTitles = $("article > .category-text-margin").attr("data-testid", "mainCategory")
    let subcategoryTitles = $("article > .category-text-margin").attr("data-testid", "subCategory")
    productsTitles.forEach(productsTitle, element => {
       element.text();
    });
}







