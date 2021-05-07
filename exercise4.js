/**
 * set strop propagation prevent in button that call get request api data atribute
 * 
 */
$("a.overlay-video-trigger").click((event) => {
    event.stopPropagation();
})