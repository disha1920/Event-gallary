function moveImages(containerClassName, direction) {
    const container = document.querySelector("." + containerClassName + " .image3");
    const imageWidth = container.querySelector("img").offsetWidth; // Width of one image
    const scrollAmount = imageWidth + 20; // Width of one image plus any additional spacing

    if (direction === 'prev') {
        container.scrollLeft -= scrollAmount;

        // If scrolled beyond the first image, loop back to the last image
        if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth - container.clientWidth;
        }
    } else if (direction === 'next') {
        container.scrollLeft += scrollAmount;

        // If at the end, loop back to the start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
        }
    }
}
