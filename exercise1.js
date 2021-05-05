/**
 * set background image in data atribute
 * @param {string} url 
 */
const setBackgroundImage = ((url) => {

    const [smallView, largeView] = $("div.hero .rendition");

    smallView.dataset.src = url
    smallView.dataset.srcSmall = url
    smallView.dataset.srcXsmall = url
    largeView.dataset.srcMedium = url;
    largeView.dataset.srcLarge = url;
    largeView.dataset.srcXlarge = url;
    largeView.dataset.srcXxlarge = url;
})

setBackgroundImage("https://placekitten.com/1280/425");
