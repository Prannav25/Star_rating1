document.addEventListener('DOMContentLoaded', function () {
    // Select all star rating containers
    const allStarRatings = document.querySelectorAll('.star-rating');

    allStarRatings.forEach(ratingContainer => {
        const stars = ratingContainer.querySelectorAll('.star');

        // Add click event to each star in the container
        stars.forEach(star => {
            star.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                setRating(stars, value);
            });
        });
    });

    /**
     * Sets the visual rating by adding/removing the 'selected' class.
     * @param {NodeListOf<Element>} stars - The list of star elements for one movie.
     * @param {string} value - The rating value (1-5) that was clicked.
     */
    function setRating(stars, value) {
        stars.forEach(star => {
            // If the star's value is less than or equal to the clicked value, select it
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('selected');
            } else {
                // Otherwise, unselect it
                star.classList.remove('selected');
            }
        });
    }
});