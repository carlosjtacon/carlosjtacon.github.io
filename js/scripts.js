;(function ($) {
    // Initialize smoothState on a container that has an id
    $('#main').smoothState({ prefetch: true });
})(jQuery);

var revert = function() {
	$('#name').text("carlos tacón");
    $('#name').css("color", "#353A47");
    $('.social-icon').css("color", "#353A47");
}

$('#aw-mastodon').hover(
    function() {
        $('#name').text("mastodon");
        $('#name').css("color", "#6364ff");
        $('#aw-mastodon').css("color", "#6364ff");
    },
    revert
);

$('#aw-github').hover(
    function() {
        $('#name').text("github");
        $('#name').css("color", "#171515");
        $('#aw-github').css("color", "#171515");
    },
    revert
);

$('#aw-labs').hover(
    function() {
        $('#name').text("labs");
        $('#name').css("color", "#2FCC63");
        $('#aw-labs').css("color", "#2FCC63");
    },
    revert
);

$('#aw-bomb').hover(
    function() {
        $('#name').text("vfx blog");
        $('#name').css("color", "#32CD32");
        $('#aw-bomb').css("color", "#32CD32");
    },
    revert
);

$('#aw-panoramas').hover(
    function() {
        $('#name').text("panoramas");
        $('#name').css("color", "#EA662A");
        $('#aw-panoramas').css("color", "#EA662A");
    },
    revert
);

$('#aw-blog').hover(
    function() {
        $('#name').text("personal blog");
        $('#name').css("color", "#FF9900");
        $('#aw-blog').css("color", "#FF9900");
    },
    revert
);

$('#aw-about').hover(
    function() {
        $('#name').text("about me");
        $('#name').css("color", "#E53935");
        $('#aw-about').css("color", "#E53935");
    },
    revert
);

$('#aw-mail').hover(
    function() {
        $('#name').text("contact me");
        $('#name').css("color", "#0b71bf");
        $('#aw-mail').css("color", "#0b71bf");
    },
    revert
);

$('#aw-photo').hover(
    function() {
        $('#name').text("photography");
        $('#name').css("color", "#FF0000");
        $('#aw-photo').css("color", "#FF0000");
    },
    revert
);

$('#aw-linkedin').hover(
    function() {
        $('#name').text("linkedin");
        $('#name').css("color", "#0077B5");
        $('#aw-linkedin').css("color", "#0077B5");
    },
    revert
);

$('#aw-imdb').hover(
    function() {
        $('#name').text("imdb");
        $('#name').css("color", "#fdcc0d");
        $('#aw-imdb').css("color", "#fdcc0d");
    },
    revert
);