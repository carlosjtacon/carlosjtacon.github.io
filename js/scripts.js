;(function ($) {
    // Initialize smoothState on a container that has an id
    $('#main').smoothState({ prefetch: true });
})(jQuery);

var revert = function() {
	$('#name').text("Carlos Tacón");
    $('#name').css("color", "#353A47");
    $('.social-icon').css("color", "#353A47");
}

$('#aw-twitter').hover(
    function() {
        $('#name').text("twitter");
        $('#name').css("color", "#55ACEE");
        $('#aw-twitter').css("color", "#55ACEE");
    },
    revert
);

$('#aw-telegram').hover(
    function() {
        $('#name').text("telegram");
        $('#name').css("color", "#55ACEE");
        $('#aw-telegram').css("color", "#55ACEE");
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

$('#aw-medium').hover(
    function() {
        $('#name').text("medium");
        $('#name').css("color", "#171515");
        $('#aw-medium').css("color", "#171515");
    },
    revert
);

$('#aw-spotify').hover(
    function() {
        $('#name').text("spotify");
        $('#name').css("color", "#2FCC63");
        $('#aw-spotify').css("color", "#2FCC63");
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

$('#naw-ello').hover(
    function() {
        $('#name').text("ello");
        $('#name').css("color", "#171515");
        $('#naw-ello').css("color", "#171515");
    },
    revert
);

$('#aw-instagram').hover(
    function() {
        $('#name').text("instagram");
        $('#name').css("color", "#1B5885");
        $('#aw-instagram').css("color", "#1B5885");
    },
    revert
);

$('#aw-blog').hover(
    function() {
        $('#name').text("blog");
        $('#name').css("color", "#FF9900");
        $('#aw-blog').css("color", "#FF9900");
    },
    revert
);

$('#aw-youtube').hover(
    function() {
        $('#name').text("youtube");
        $('#name').css("color", "#cd201f");
        $('#aw-youtube').css("color", "#cd201f");
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

$('#aw-podcast').hover(
    function() {
        $('#name').text("podcast");
        $('#name').css("color", "#ff7f00");
        $('#aw-podcast').css("color", "#ff7f00");
    },
    revert
);

$('#aw-mail').hover(
    function() {
        $('#name').text("mail");
        $('#name').css("color", "#55ACEE");
        $('#aw-mail').css("color", "#55ACEE");
    },
    revert
);

$('#aw-photo').hover(
    function() {
        $('#name').text("photo portfolio");
        $('#name').css("color", "#9013FE");
        $('#aw-photo').css("color", "#9013FE");
    },
    revert
);