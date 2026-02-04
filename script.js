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
