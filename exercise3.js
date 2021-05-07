/**
 * @description Move image top area section in the middle.
 * @function moveTopArea
 * @example background-image: url(urlparameter)
 * 
 */

const moveTopArea  = (() => {
    let imageSection = document.querySelector("div.hero")
    let textSection = document.querySelector("div.text-component:nth-child(2)")

    imageSection.before(textSection)
})
