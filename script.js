jQuery(document).ready(function () {

    jQuery('a.ttm_prettyphoto').prettyPhoto();

    jQuery(".accordion").each(function () {
        var $accordion = jQuery(this);
        var allPanels = $accordion.find(".toggle-content").hide();

        $accordion.find(".toggle-title > a").click(function () {
            var $this = jQuery(this);
            var $current = $this.parent().next(".toggle-content");

            // Toggle active class on links within this accordion
            $accordion.find(".toggle-title > a").removeClass("active");
            $this.addClass("active");

            // Slide up others and slide down current within this accordion
            allPanels.not($current).slideUp("easeInExpo");
            $current.slideDown("easeOutExpo");

            return false;
        });
    });

});

let currentSlide = 0;
function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add(direction > 0 ? 'prev-slide' : '');

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides.forEach((slide, index) => {
        if (index !== currentSlide) {
            slide.classList.remove('active');
            if (direction > 0 && index < currentSlide) {
                slide.classList.add('prev-slide');
            } else {
                slide.classList.remove('prev-slide');
            }
        }
    });

    slides[currentSlide].classList.add('active');
    slides[currentSlide].classList.remove('prev-slide');
}
