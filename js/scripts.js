var revert = function() {
	$('#name').text("Carlos Tacón");
    $('#name').css("color", "#353A47");
    $('#aw-twitter').css("color", "#353A47");
    $('#aw-telegram').css("color", "#353A47");
    $('#aw-github').css("color", "#353A47");
    $('#aw-medium').css("color", "#353A47");
    $('#aw-spotify').css("color", "#353A47");
    $('#aw-labs').css("color", "#353A47");
    $('#naw-ello').css("color", "#353A47");
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