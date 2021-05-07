/**
 * @description Store name of the category in subcategories
 * @function setSubcategoriesName
 * @example Productname => "ProductName - SubcategoriesName" 
 * Computer => "Computer - Laptops"
 * 
 */

const setSubcategoriesName = () => {

    const subcategoryTitles = document.querySelectorAll("article > .category-text-margin")

    for(let i = 0; i < subcategoryTitles.length; i++){
        const [title, ...subtitles] = subcategoryTitles[i].innerText.split("\n")
        const liElements = subcategoryTitles[i].children.item(1).childElementCount

        for(let c = 0; c < liElements; c++){
            subcategoryTitles[i].children.item(1).children[c].children[0].innerText = `${title} - ${subtitles[c]}`
        }
    }
}
